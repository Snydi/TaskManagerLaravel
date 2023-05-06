import React, { useState } from "react";
import TaskList from "../components/TaskList";
import MyLoader from "../components/UI/Loader/myLoader";
import useDebounce from "../hooks/useDebounce";
import MyModal from "../components/UI/Modal/myModal";
import GroupList from "../components/GroupList";
import TaskService from "../API/TaskService";
import TaskForm from "../components/TaskForm";
import GroupFrom from "../components/GroupForm";
import useTasks from "../hooks/useTasks";
import Button from "react-bootstrap/Button";
import MyCollapse from "../components/UI/Collapse/myCollapse";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const [modal, setModal] = useState(false);
  const [
    tasks,
    setTasks,
    groups,
    setGroups,
    isLoading,
    setIsLoading,
    selectGroup,
    setSelectGroup,
  ] = useTasks();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("")
  const debouncedEdit = useDebounce((id, updated, obj) => {
    setIsLoading(true);
    TaskService.update(id, updated, obj)
      .then(() => {
        setIsLoading(false);
        setError("")
      })
      .catch(error => {
        setError("Edit fields can't be empty!")
        setIsLoading(false);
      })
  }, 350);
  function addTask(newTask) {
    setIsLoading(true);
    TaskService.add(newTask).then((response) => {
      setTasks((prevTasks) => [...prevTasks, response]);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error)
      setIsLoading(false)
    });
  }

  function edit(arr, value, index, key, obj) {
    let updated = obj === "groups" ? [...groups] : [...tasks];
    updated[index] = {
      ...updated[index],
      [key]: value,
    };
    if (obj === "groups") {
      setGroups(updated);
    } else {
      setTasks(updated);
    }
    debouncedEdit(arr.id, updated[index], obj);

  }

  function addGroup(newGroup) {
    setIsLoading(true);
    TaskService.addGroup({
      ...newGroup,
      user_id: groups[0].user_id,
    }).then((response) => {
      setGroups((prev) => [...prev, response]);
      setIsLoading(false);
    });
  }

  function remove(arr, obj) {
    setIsLoading(true);
    TaskService.remove(arr, obj).then(() => {
      if (obj === "groups") {
        setGroups(groups.filter((g) => g.id !== arr.id));
        setTasks(tasks.filter((t) => t.group_id != arr.id));
        setIsLoading(false);
      } else {
        setTasks(tasks.filter((t) => t.id !== arr.id));
        setIsLoading(false);
      }
    });
  }
  return (
    <div className="homepage">
      <MyModal visible={modal} setVisible={setModal}>
      {error && <Alert variant="danger">
              {error}
              </Alert>}
        <GroupFrom addGroup={addGroup} />
        <GroupList
          groups={groups}
          remove={remove}
          edit={edit}
        />
      </MyModal>

      <div className="wrapper">
        <div className="mt-5">
          {tasks.length ? (
            <h1 style={{ textAlign: "center" }}>Tasks:</h1>
          ) : (
            <h1 style={{ textAlign: "center" }}>{isLoading ? "Loading..." : "No Tasks!"}</h1>
          )}
          
          <div className="d-flex mb-1 justify-content-between align-items-center">
          <ButtonGroup>
            <Button onClick={() => setOpen((prev) => !prev)}>
              {open ? "Close" : "Add Task"}
            </Button>
            <Button onClick={() => setModal(true)}>Edit groups</Button>
          </ButtonGroup>
          {isLoading && <MyLoader className="d-flex "/>}
          </div>
          <MyCollapse open={open} className="mt-3 border">
            <TaskForm
              groups={groups}
              add={addTask}
              selectGroup={selectGroup}
              setSelectGroup={setSelectGroup}
            />
          </MyCollapse>
          {error && <Alert variant="danger">
              {error}
              </Alert>}
          <TaskList tasks={tasks} remove={remove} edit={edit} groups={groups} />
        </div>
      </div>
    </div>
  );
};

export default Home;
