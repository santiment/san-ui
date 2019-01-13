import React from 'react'
import styles from './Input.module.scss'

const Input = ({ isError, inplace, className = '', ...props }) => {
  return (
    <input
      type='text'
      className={`${styles.input} ${inplace ? styles['inplace'] : ''} ${
        isError ? styles.error : ''
      } ${className}`}
      {...props}
    />
  )
}

export default Input
