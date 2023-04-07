import React from 'react';

const GroupItem = ({group, index}) => {
    return (
        <div className='group'>
            <div className='group__content'>
                <h2>{index + 1}</h2>
                <p>{group.group}</p>
            </div>
            <div className='group__buttons'>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default GroupItem;
