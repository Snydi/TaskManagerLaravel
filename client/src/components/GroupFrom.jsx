import React, { useState } from 'react';

const GroupFrom = ({addGroup}) => {
    const [newGroup, setNewGroup] = useState({
        group: "",
        user_id: null,
      });
    return (
        <form>
            <input placeholder="Group name" value={newGroup.group} onChange={e => setNewGroup({ ...newGroup, group: e.target.value })} />
            <button onClick={addGroup}>Add Group</button>
        </form>
    );
}

export default GroupFrom;
