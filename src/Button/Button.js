import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Loader from '../Loader/Loader'
import styles from './Button.module.scss'

const Button = ({
  children,
  as: BaseButton,
  isActive,
  isLoading,
  variant,
  accent,
  fluid,
  border,
  disabled,
  className,
  forwardedRef,
  classes,
  ...props
}) => {
  return (
    <BaseButton
      className={cx({
        [`${className} ${styles.button} ${styles[variant]}`]: true,
        [styles[accent]]: accent,
        [`${styles.active} ${classes.active}`]: isActive,
        [styles.bordered]: border,
        [styles.fluid]: fluid,
        [`${styles.disabled} ${classes.disabled}`]: disabled,
        [styles.loading]: isLoading
      })}
      ref={forwardedRef}
      {...props}
    >
      {children}
      {isLoading && <Loader className={styles.loader} />}
    </BaseButton>
  )
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fluid: PropTypes.bool,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  border: PropTypes.bool,
  variant: PropTypes.oneOf(['flat', 'ghost', 'fill']),
  accent: PropTypes.oneOf([
    'grey',
    'positive',
    'negative',
    'purple',
    'orange',
    'blue',
    'cyan',
    'sheets'
  ]),
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  as: 'button',
  fluid: false,
  border: false,
  isActive: false,
  isLoading: false,
  variant: undefined,
  accent: undefined,
  className: '',
  classes: {
    active: '',
    disabled: ''
  }
}

export default Button
