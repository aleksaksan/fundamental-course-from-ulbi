import React from 'react';
import classes from './input.module.scss'

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default Input;