import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Message.module.scss'
import Icon from '../Icon'

const Message = ({
  wrapperClassName,
  className,
  type,
  children,
  icon,
  iconClassName,
  ...props,
}) => (
  <div
    className={cx({
      [`${wrapperClassName} ${styles.wrapper} ${styles[type]}`]: true,
    })}
    {...props}
  >
    {icon && (
      <div className={styles.iconWrapper}>
        <Icon
          type={icon}
          className={cx({
            [styles.icon]: true,
            [styles[`icon-${type}`]]: type,
            [iconClassName]: iconClassName,
          })}
        />
      </div>
    )}
    <p className={cx({
      [`${className} ${styles.message} ${styles[type]}`]: true,
    })}>
      {children}
    </p>
  </div>
);

Message.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Message.defaultProps = {
  type: 'info',
  wrapperClassName: '',
  className: '',
  iconClassName: '',
};

export default Message;
