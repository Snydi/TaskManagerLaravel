import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const GroupFrom = ({addGroup}) => {
    const [newGroup, setNewGroup] = useState({
        group: "",
        user_id: null,
      });
    function handleAdd(e,newGroup){
        e.preventDefault()
        addGroup(newGroup)
        setNewGroup({
            group: "",
            user_id: null,
        })
    }
    return (
        <Form className='border border-primary p-3 rounded mb-1  bg-light bg-gradient'>
            <Form.Group className='mb-3 mt-3'>
            <Form.Label>Add group</Form.Label>
            <Form.Control type="text" placeholder="Group name" value={newGroup.group} onChange={e => setNewGroup({ ...newGroup, group: e.target.value })} />
            </Form.Group>
            <Button onClick={e => handleAdd(e,newGroup)} className='mb-3'>Add Group</Button>
        </Form>
    );
}

export default GroupFrom;
