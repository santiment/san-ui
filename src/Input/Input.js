import React from 'react';
import styles from './Input.module.scss';

const Input = ({ inplace, className = '', ...props }) => {
  return (
    <input
      type="text"
      className={`${styles.input} ${
        inplace ? styles['inplace'] : ''
      } ${className}`}
      {...props}
    />
  );
};

export default Input;
