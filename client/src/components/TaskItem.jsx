import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Fade from 'react-bootstrap/Fade';

const TaskItem = ({task, index, remove, edit, groups}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true);
    }, []);
    return (
        <Fade in={open}>
            <ListGroup.Item variant={task.status === "Completed" ? "success" : ""}  style={{ transition: "all 0.6s ease-in-out" }}>
                <Form className='d-flex justify-content-between align-items-center'>
                    <h2>{index+1}</h2>
                    <Form.Group>
                        <Form.Control as="textarea" value={task.task} onChange={e => edit(task,e.target.value, index, "task", "tasks")}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select value={task.status} onChange={e => edit(task,e.target.value, index, "status", "tasks")}>
                            <option default>{task.status}</option>
                            {task.status === "In progress" ?  <option value="Completed">Completed</option> : <option value="In progress">In progress</option>}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="date" value={task.deadline} onChange={e => edit(task,e.target.value, index, "deadline", "tasks")}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select value={task.group_id} onChange={e => edit(task, e.target.value, index, "group_id", "tasks")}>
                            {groups.map(group => (
                                <option key={group.id} value={group.id}>
                                    {group.group}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant={task.status === "Completed" ? "success" : "danger"} onClick={() => {setOpen(false); setTimeout(() => remove(task, "tasks"), 350)}} style={{ transition: "all 0.35s ease-in-out" }}>Delete</Button>
                </Form>
            </ListGroup.Item>
        </Fade>
    );
}

export default TaskItem;