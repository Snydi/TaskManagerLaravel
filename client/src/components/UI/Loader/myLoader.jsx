import React from 'react';
import classes from './myLoader.module.css'
import Spinner from 'react-bootstrap/Spinner';

const MyLoader = (props) => {
    return (
        <Spinner animation="border" role="status" {...props}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}

export default MyLoader;
