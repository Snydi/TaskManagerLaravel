import React from 'react';
import classes from './myLoader.module.css'

const MyLoader = (props) => {
    return (
<div {...props} className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    );
}

export default MyLoader;
