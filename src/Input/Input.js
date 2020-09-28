import React, { useState } from 'react'
import cx from 'classnames'
import Notification from '../Notification'
import styles from './Input.module.scss'

const Input = ({
  forwardedRef,
  isError,
  errorText,
  inplace,
  className = '',
  errorClassName = '',
  ...props
}) => {
  return (
    <>
      <input
        ref={forwardedRef}
        type='text'
        className={cx(
          styles.input,
          inplace && styles['inplace'],
          isError && styles.error,
          className
        )}
        {...props}
      />
      {errorText && (
        <div className={cx(styles.errorWrapper, errorClassName)}>
          <Notification
            hasCloseBtn={false}
            className={styles.errorText}
            title={errorText}
            size='small'
            variant='error'
          />
        </div>
      )}
    </>
  )
}

export default Input
