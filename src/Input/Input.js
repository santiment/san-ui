import React, { useState } from 'react'
import Notification from '../Notification'
import styles from './Input.module.scss'

const Input = ({
  forwardedRef,
  isError,
  errorText,
  inplace,
  className = '',
  ...props
}) => {
  return (
    <>
      <input
        ref={forwardedRef}
        type='text'
        className={`${styles.input} ${inplace ? styles['inplace'] : ''} ${
          isError ? styles.error : ''
        } ${className}`}
        {...props}
      />
      {errorText && (
        <Notification
          hasCloseBtn={false}
          className={styles.notification}
          title={errorText}
          size='small'
          variant='error'
        />
      )}
    </>
  )
}

export default Input
