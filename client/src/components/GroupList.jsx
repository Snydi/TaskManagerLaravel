import React from 'react';
import GroupItem from './GroupItem';

const GroupList = ({groups}) => {
    return (
        <div className="groups">
      {groups.map((group, index) => (
        <GroupItem
          group={group}
          index={index}
          key={group.id}
        />
      ))}
    </div>
    );
}

export default GroupList;
