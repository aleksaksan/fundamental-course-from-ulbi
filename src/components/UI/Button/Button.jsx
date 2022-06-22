import React from 'react';
import classes from './Button.module.scss';

export const Button = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn} >
      {children}
    </button>
  );
};
