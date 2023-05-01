import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const TaskItem = ({task, index, remove, edit, groups}) => {

    return (
            <ListGroup.Item variant={task.status === "Completed" ? "success" : null}>
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
                <Button variant="danger" onClick={() => remove(task, "tasks")}>Delete</Button>
            </Form>
            </ListGroup.Item>
    );
}

export default TaskItem;