import React, { useState } from 'react';



const TaskForm = ({groups, setSelectGroup, selectGroup, add}) => {
    const [newTask, setNewTask] = useState({
        task: "",
        group_id: "",
        status: "In progress",
        deadline: "",
      });
    return (
    <form>
        <input placeholder='Task name' value={newTask.task} onChange={e => setNewTask({ ...newTask, task: e.target.value })} />
        <select value={selectGroup} onChange={e => setSelectGroup(e.target.value)}>
            {groups.map(group =>
                <option key={group.id} value={group.id}>{group.group}</option>
            )}
        </select>
        <input type="date" value={newTask.deadline} onChange={e => setNewTask({ ...newTask, deadline: e.target.value })} />
        <button onClick={add}>Add task</button>
    </form>
    );
}

export default TaskForm;