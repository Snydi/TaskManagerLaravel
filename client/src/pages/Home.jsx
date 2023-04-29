import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import MyLoader from "../components/UI/Loader/myLoader";
import useDebounce from "../hooks/useDebounce";
import MyModal from "../components/UI/Modal/myModal";
import GroupList from "../components/GroupList";
import TaskService from "../API/TaskService";
import TaskForm from "../components/TaskForm";
import GroupFrom from "../components/GroupFrom";
import useTasks from "../hooks/useTasks";
const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [tasks, setTasks, groups, setGroups, isLoading, selectGroup, setSelectGroup] = useTasks();
  const debouncedEdit = useDebounce((id, updated, obj) => {
    setIsLoading(true);
    TaskService.update(id, updated, obj)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, 350);
  function addTask(e) {
    e.preventDefault();
    setIsLoading(true);
    TaskService.add({
      ...newTask,
      group_id: selectGroup,
    }).then((response) => {
      setTasks((prevTasks) => [...prevTasks, response]);
      setNewTask({
        task: "",
        group_id: "",
        status: "In progress",
        deadline: "",
      });
      setSelectGroup(groups[0].id);
      setIsLoading(false);
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

  function addGroup(e) {
    e.preventDefault();
    setIsLoading(true);
    TaskService.addGroup({
      ...newGroup,
      user_id: groups[0].user_id,
    }).then((response) => {
      setGroups((prev) => [...prev, response]);
      setNewGroup({
        group: "",
        user_id: null,
      });
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
        <GroupList
          groups={groups}
          setVisible={setModal}
          remove={remove}
          edit={edit}
        />
      </MyModal>
      <div className="wrapper">
        <button onClick={() => setModal(true)}>Edit groups</button>
        <TaskForm
          groups={groups}
          setSelectGroup={setSelectGroup}
          selectGroup={selectGroup}
          add={addTask}
        />
        <GroupFrom
          addGroup={addGroup}
        />
        {isLoading ? (
          <MyLoader style={{ display: "flex", margin: "0 auto" }} />
        ) : tasks.length ? (
          <h1 style={{ textAlign: "center" }}>Tasks:</h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>No tasks! Add one</h1>
        )}
        <TaskList tasks={tasks} remove={remove} edit={edit} groups={groups} />
      </div>
    </div>
  );
};

export default Home;
