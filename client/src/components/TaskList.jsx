import React from "react";
import TaskItem from "./TaskItem";
import ListGroup from 'react-bootstrap/ListGroup';
const TaskList = ({ tasks, remove, edit, groups }) => {

  return (
    <ListGroup>
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
    </ListGroup>
  );
};

export default TaskList;
