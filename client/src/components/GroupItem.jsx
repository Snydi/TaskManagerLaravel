import React from 'react';

const GroupItem = ({group, index, remove, edit}) => {
    return (
        <div className='group'>
            <div className='group__content'>
                <h2>{index + 1}</h2>
                <textarea value={group.group} onChange={e => edit(group,e.target.value, index, "group", "groups")}>{group.group}</textarea>
            </div>
            <div className='group__buttons'>
              {group.group === "No group"
              ?
              <button disabled>Delete</button>
              :
              <button onClick={() => remove(group, "groups") }>Delete</button>
                }
            </div>
        </div>
    );
}

export default GroupItem;
