import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const GroupForm = ({addGroup}) => {
    const [validated, setValidated] = useState(false)
    const [newGroup, setNewGroup] = useState({
        group: "",
        user_id: null,
      });
    function handleAdd(newGroup){
        addGroup(newGroup)
        setNewGroup({
            group: "",
            user_id: null,
        })
        setValidated(false)
    }
    function handleSubmit(e, newGroup){
        e.preventDefault();
        if(newGroup.group){
            handleAdd(newGroup)
        }
        else{
            setValidated(true)
        }
    }

    return (
        <Form noValidate validated={validated} className='border border-primary p-3 rounded mb-1  bg-light bg-gradient'>
            <Form.Group className='mb-3 mt-3'>
            <Form.Label>Add group</Form.Label>
            <Form.Control required type="text" placeholder="Group name" value={newGroup.group} onChange={e => setNewGroup({ ...newGroup, group: e.target.value })} />
            <Form.Control.Feedback type="invalid">
                Can't be empty!
            </Form.Control.Feedback>
            </Form.Group>
            
            <Button type="submit" className='mb-3' onClick={e => handleSubmit(e, newGroup)}>Add Group</Button>
        </Form>
    );
}

export default GroupForm;
