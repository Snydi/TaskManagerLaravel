import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const TaskForm = ({groups, setSelectGroup, selectGroup, add}) => {
    const [newTask, setNewTask] = useState({
        task: "",
        group_id: "",
        status: "In progress",
        deadline: "",
      });

    function handleAdd(e, newTask){
        e.preventDefault()
        add(newTask)
        setNewTask({
            task: "",
            group_id: "",
            status: "In progress",
            deadline: ""
        })
        setSelectGroup(groups[0].id);
    }
    useEffect(() => {
        setNewTask(newTask => ({ ...newTask, group_id: selectGroup }));
    }, [selectGroup]);

    return (
    <Form>
      <Form.Group className='mb-3'>
      <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter your task" value={newTask.task} onChange={e => setNewTask({ ...newTask, task: e.target.value })} required/>
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Form Group</Form.Label>
        <Form.Select value={selectGroup} onChange={e => setSelectGroup(e.target.value)}>
            {groups.map(group =>
                <option key={group.id} value={group.id}>{group.group}</option>
            )}
        </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Deadline</Form.Label>
        <Form.Control type="date" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={newTask.deadline} onChange={e => setNewTask({ ...newTask, deadline: e.target.value })} required/>
        </Form.Group>
        <Button type="button" className="btn btn-primary" onClick={(e) => handleAdd(e, newTask)}>Add Task</Button>
      </Form>
    );
}

export default TaskForm;