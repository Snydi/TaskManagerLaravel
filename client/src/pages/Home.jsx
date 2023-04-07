import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../AuthContext'
import axios from 'axios';
import TaskList from '../components/TaskList';
import MyLoader from '../components/UI/Loader/myLoader';
import useDebounce from '../hooks/useDebounce';
import MyModal from '../components/UI/Modal/myModal';
import GroupList from '../components/GroupList';
const Home = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState({
        task: "",
        group_id: "",
        status: "In progress",
        deadline: ""
    })
    const [groups, setGroups] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectGroup, setSelectGroup] = useState("")
    const [newGroup, setNewGroup] = useState({
        group: "",
        user_id: null
    })
    const [modal, setModal] = useState(false);
    const debouncedUpdateTask = useDebounce((taskId, updatedTask) => {
        setIsLoading(true);
        axios
          .put(`/api/tasks/${taskId}`, updatedTask)
          .then(() => {
            setIsLoading(false);
          })
          .catch(error => {
            console.log(error);
            setIsLoading(false);
          });
      }, 500);
    useEffect(() => {
        setIsLoading(true)
        const token = JSON.parse(localStorage.getItem('token'));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        Promise.all([
            axios.get('/api/tasks'),
            axios.get('/api/groups')
        ]).then(([tasksResponse, groupsResponse]) => {
            setTasks(tasksResponse.data)
            setGroups(groupsResponse.data)
            setSelectGroup(groupsResponse.data[0].id)
            setIsLoading(false)
        })
    }, []);

    function addTask(e) {
        e.preventDefault()
        setIsLoading(true)
        axios.post("api/tasks/store", {
            ...newTask,
            group_id: selectGroup
        }).then(response => {
            setTasks(prevTasks => [...prevTasks, response.data])
            setNewTask({
                task: "",
                group_id: "",
                status: "In progress",
                deadline: ""
            })
            setSelectGroup(groups[0].id)
            setIsLoading(false)

        });
    }

    function editTask(task, value, index, key) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = {
            ...updatedTasks[index],
            [key]: value
        };
        setTasks(updatedTasks);
        debouncedUpdateTask(task.id, updatedTasks[index])
    }

    function addGroup(e) {
        e.preventDefault()
        setIsLoading(true)
        axios.post("/api/groups/store", {
            ...newGroup,
            user_id: groups[0].user_id
        }).then(response => {
            setGroups(prev => [...prev, response.data])
            setNewGroup({
                group: "",
                user_id: null
            })
            setIsLoading(false)
        })
    }

    function remove(task) {
        setIsLoading(true)
        axios.delete(`/api/tasks/${task.id}`)
            .then(() => {
                setTasks(tasks.filter(t => t.id !== task.id));
                setIsLoading(false)
            })
    }

    return (
        <div className='homepage'>
            <MyModal visible={modal} setVisible={setModal}>
                <GroupList groups={groups}/>
            </MyModal>
            <div className='wrapper'>
            <button onClick={() => setModal(true)}>Edit groups</button>
            <form>
                <input placeholder='Task name' value={newTask.task} onChange={e => setNewTask({ ...newTask, task: e.target.value })} />
                <select value={selectGroup} onChange={e => setSelectGroup(e.target.value)}>
                    {groups.map(group =>
                        <option key={group.group} value={group.id}>{group.group}</option>
                    )}
                </select>
                <input type="date" value={newTask.deadline} onChange={e => setNewTask({ ...newTask, deadline: e.target.value })} />
                <button onClick={addTask}>Add task</button>
            </form>
            <form>
                <input placeholder="Group name" value={newGroup.group} onChange={e => setNewGroup({ ...newGroup, group: e.target.value })} />
                <button onClick={addGroup}>Add Group</button>
            </form>

            {isLoading ? (
                <MyLoader style={{ display: 'flex', margin: '0 auto' }} />
            ) : tasks.length ? (
                <h1 style={{ textAlign: 'center' }}>Tasks:</h1>
            ) : (
                <h1 style={{ textAlign: 'center' }}>No tasks! Add one</h1>
            )}

            <TaskList tasks={tasks} remove={remove} edit={editTask} groups={groups}/>

            </div>

        </div>
    );
}

export default Home;
