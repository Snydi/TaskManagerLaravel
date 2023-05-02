import React from "react";
import GroupItem from "./GroupItem";
import ListGroup from 'react-bootstrap/ListGroup';

const GroupList = ({ groups, remove, edit }) => {
  return (
    <ListGroup>
      {groups.map((group, index) => (
        <GroupItem
          group={group}
          index={index}
          key={group.id}
          remove={remove}
          edit={edit}
        />
      ))}
    </ListGroup>
  );
};

export default GroupList;
