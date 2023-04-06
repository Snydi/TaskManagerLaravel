import React, { useState } from 'react';



const TaskItem = ({task, index, remove, edit, groups}) => {

    const group = groups.find(g => g.id === task.group_id)
    console.log(group)
    return (
        <div className='task'>
            <div className='task__content'>
                <h2>{index + 1}</h2>
                <textarea value={task.task} onChange={e => edit(task,e.target.value, index, "task")}>{task.task}</textarea>
                <select value={task.status} onChange={e => edit(task,e.target.value, index, "status")}>
                    <option default >{task.status}</option>
                  {task.status === "In progress" ?  <option value="Completed">Completed</option> : <option value="In progress">In progress</option>}
                </select>
                <input type="date" value={task.deadline} onChange={e => edit(task,e.target.value, index, "deadline")}/>
            </div>
            <select value={group.id} onChange={e =>{
               const parsed = parseInt(e.target.value) 
                edit(task, parsed,index, "group_id")}}>
            {groups.map(group =>
                        <option key={group.group} value={group.id}>{group.group}</option>
                    )}
            </select>
            <div className='task__buttons'>
                <button onClick={() => remove(task)}>Delete task</button>
            </div>
        </div>
    );
}

export default TaskItem;