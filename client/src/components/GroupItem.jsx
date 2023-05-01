import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const GroupItem = ({group, index, remove, edit}) => {
    return (
        <ListGroup.Item>
            <Form className='d-flex justify-content-between align-items-center'>
            <h2>{index + 1}</h2>
                <Form.Group>
                    <Form.Control as="textarea" value={group.group} onChange={e => edit(group,e.target.value, index, "group", "groups")}/>
                </Form.Group>
              {group.group === "No group"
              ?
              <Button variant='danger' disabled>Delete</Button>
              :
              <Button variant='danger' onClick={() => remove(group, "groups") }>Delete</Button>
                }
            </Form>
        </ListGroup.Item>
    );
}

export default GroupItem;
