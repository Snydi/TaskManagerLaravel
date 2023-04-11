import React from 'react';
import GroupItem from './GroupItem';

const GroupList = ({groups, setVisible, remove, edit}) => {
    return (
      <>
      <span onClick={() => setVisible(false)} style={{cursor:"pointer", float:"right", marginTop:"20px"}} className="material-symbols-outlined">
      close
      </span>
        <div className="groups">

          <h1 style={{textAlign:"center"}}>Groups:</h1>

      {groups.map((group, index) => (
        <GroupItem
          group={group}
          index={index}
          key={group.id}
          remove={remove}
          edit={edit}
        />
      ))}
    </div>
    </>
    );
}

export default GroupList;
