import React from 'react';
import classes from './input.module.scss'

export const Input = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};
