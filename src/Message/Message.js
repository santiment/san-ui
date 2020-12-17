import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import styles from './Message.module.scss'

const Message = ({
  className,
  variant,
  children,
  icon,
  iconClassName,
  fill,
  ...props
}) => (
  <div
    className={cx(
      className,
      styles.wrapper,
      styles[variant],
      fill && styles.filled,
      icon && styles.withIcon
    )}
    {...props}
  >
    {icon && <Icon type={icon} className={cx(iconClassName, styles.icon)} />}
    {children}
  </div>
)

Message.propTypes = {
  iconClassName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
  icon: PropTypes.string,
  fill: PropTypes.bool,
  children: PropTypes.any.isRequired
}

Message.defaultProps = {
  variant: 'info',
  className: '',
  iconClassName: '',
  fill: true
}

export default Message
