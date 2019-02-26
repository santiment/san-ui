import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Message.module.scss'
import Icon from '../Icon'

const Message = ({
  wrapperClassName,
  className,
  variant,
  children,
  icon,
  iconClassName,
  ...props,
}) => (
  <div className={cx(wrapperClassName, styles.wrapper, styles[variant])} {...props}>
    {icon && (
      <div className={styles.iconWrapper}>
        <Icon
          type={icon}
          className={cx(iconClassName)}
        />
      </div>
    )}
    <p className={cx(className, styles.message, styles[variant])}>
      {children}
    </p>
  </div>
);

Message.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Message.defaultProps = {
  variant: 'info',
  wrapperClassName: '',
  className: '',
  iconClassName: '',
};

export default Message;
