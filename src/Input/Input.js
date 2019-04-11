import React from 'react'
import styles from './Input.module.scss'

const Input = ({
  forwardedRef,
  isError,
  inplace,
  className = '',
  ...props
}) => {
  return (
    <input
      ref={forwardedRef}
      type='text'
      className={`${styles.input} ${inplace ? styles['inplace'] : ''} ${
        isError ? styles.error : ''
      } ${className}`}
      {...props}
    />
  )
}

export default Input
