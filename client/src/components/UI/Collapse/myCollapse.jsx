import React from 'react';
import Collapse from 'react-bootstrap/Collapse';

const MyCollapse = ({open, children}) => {
    return (
        <Collapse in={open}>
            <div>
            {children}
            </div>
        </Collapse>
    );
}

export default MyCollapse;
