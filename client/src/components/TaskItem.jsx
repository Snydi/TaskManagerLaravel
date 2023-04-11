import React from 'react';



const TaskItem = ({task, index, remove, edit, groups}) => {

    return (
        <div className={`task${task.status === "Completed" ? " completed" : ""}`}>
            <div className='task__content'>
                <h2>{index + 1}</h2>
                <textarea value={task.task} onChange={e => edit(task,e.target.value, index, "task", "tasks")}>{task.task}</textarea>
                <select value={task.status} onChange={e => edit(task,e.target.value, index, "status")}>
                    <option default>{task.status}</option>
                  {task.status === "In progress" ?  <option value="Completed">Completed</option> : <option value="In progress">In progress</option>}
                </select>
                <input type="date" value={task.deadline} onChange={e => edit(task,e.target.value, index, "deadline")}/>
            </div>
            <select value={task.group_id} onChange={e => edit(task, e.target.value, index, "group_id")}>
                {groups.map(group => (
                  <option key={group.id} value={group.id}>
                    {group.group}
                  </option>
                ))}
            </select>
            <div className='task__buttons'>
                <span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={() => remove(task, "tasks")}>delete</span>
            </div>
        </div>
    );
}

export default TaskItem;