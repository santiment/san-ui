import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({
  children,
  as: BaseButton,
  isActive,
  variant,
  accent,
  fluid,
  className,
  ...props
}) => {
  return (
    <BaseButton
      className={`${styles[variant]} ${styles[accent]} ${
        styles.button
      } ${className} ${isActive ? styles.active : ''} ${fluid ? styles.fluid : ''}`}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fluid: PropTypes.bool,
  variant: PropTypes.oneOf(['flat', 'ghost', 'fill', 'border']),
  accent: PropTypes.oneOf(['grey', 'positive', 'negative', 'purple'])
}

Button.defaultProps = {
  as: 'button',
  variant: 'fill',
  accent: 'grey',
  className: ''
}

export default Button
