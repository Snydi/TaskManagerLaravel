import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, remove, edit, groups }) => {

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          index={index}
          key={task.id}
          remove={remove}
          edit={edit}
          groups={groups}
        />
      ))}
    </div>
  );
};

export default TaskList;
