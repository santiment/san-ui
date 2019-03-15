import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Button.module.scss'

const Button = ({
  children,
  as: BaseButton,
  isActive,
  variant,
  accent,
  fluid,
  border,
  disabled,
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={cx({
        [`${className} ${styles.button} ${styles[variant]}`]: true,
        [styles[accent]]: accent,
        [styles.active]: isActive,
        [styles.bordered]: border,
        [styles.fluid]: fluid,
        [styles.disabled]: disabled
      })}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fluid: PropTypes.bool,
  isActive: PropTypes.bool,
  border: PropTypes.bool,
  variant: PropTypes.oneOf(['flat', 'ghost', 'fill']),
  accent: PropTypes.oneOf([
    'grey',
    'positive',
    'negative',
    'purple',
    'orange',
    'blue',
    'cyan'
  ]),
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Button.defaultProps = {
  as: 'button',
  fluid: false,
  border: false,
  isActive: false,
  variant: undefined,
  accent: undefined,
  className: ''
}

export default Button
