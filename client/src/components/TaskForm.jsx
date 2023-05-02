import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const TaskForm = ({groups, setSelectGroup, selectGroup, add}) => {
    const [validated, setValidated] = useState(false)
    const [newTask, setNewTask] = useState({
        task: "",
        group_id: "",
        status: "In progress",
        deadline: "",
      });

    function handleAdd(newTask){
        add(newTask)
        setSelectGroup(groups[0].id)
        setNewTask({
            task: "",
            group_id: selectGroup,
            status: "In progress",
            deadline: ""
        })
        setValidated(false)
    }

    function handleSubmit(e, newTask){
        e.preventDefault();
        if(newTask.task && newTask.deadline){
            handleAdd(newTask)
        }
        else{
            setValidated(true)
        }
    }
    
    
    useEffect(() => {
        setNewTask(newTask => ({ ...newTask, group_id: selectGroup }));
    }, [selectGroup]);
    return (
    <Form noValidate validated={validated} className="border border-primary p-3 rounded mb-1  bg-light bg-gradient">
        <h2 className='text-center'>Create new task</h2>
      <Form.Group className='mb-3'>
      <Form.Label>Task:</Form.Label>
        <Form.Control type="text" placeholder="Enter your task" value={newTask.task} onChange={e => setNewTask({ ...newTask, task: e.target.value })} required/>
        <Form.Control.Feedback type="invalid">Can't be empty!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Task Group:</Form.Label>
        <Form.Select value={newTask.group_id || selectGroup} onChange={e => setSelectGroup(e.target.value)}>
            {groups.map(group =>
                <option key={group.id} value={group.id}>{group.group}</option>
            )}
        </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Deadline:</Form.Label>
        <Form.Control type="date" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={newTask.deadline} onChange={e => setNewTask({ ...newTask, deadline: e.target.value })} required/>
        <Form.Control.Feedback type="invalid">Can't be empty!</Form.Control.Feedback>
        </Form.Group>
        <Button type="button" className="btn btn-primary" onClick={e => handleSubmit(e, newTask)}>Add Task</Button>
      </Form>
    );
}

export default TaskForm;