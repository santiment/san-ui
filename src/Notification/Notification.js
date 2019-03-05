import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';
import NotificationItem from './NotificationItem';
import styles from './Notification.module.scss';

const Notification = ({
  className,
  notifications,
  onClose,
}) => (
  <div className={cx(styles.wrapper, className)}>
    {notifications.map(notification => (
      <NotificationItem
        key={notification.id}
        onClose={() => onClose(notification)}
        {...notification}
      />
    ))}
  </div>
)

Notification.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      description: PropTypes.string,
      hideTitleIcon: PropTypes.bool,
      solidFill: PropTypes.bool,
      renderActionButton: PropTypes.func,
      titleIconName: PropTypes.string,
      variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
      title: PropTypes.string
    })
  ).isRequired,
  onClose: PropTypes.func,
  className: PropTypes.string,
}

export default Notification
