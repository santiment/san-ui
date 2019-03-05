import React from 'react'
import PropTypes from 'prop-types'
import NotificationItem from './NotificationItem';
import styles from './Notification.module.scss';

const Notification = props => (
  <div className={styles.wrapper}>
    {props.notifications.map(notification => (
      <NotificationItem
        key={notification.id}
        onClose={() => props.onClose(notification)}
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
      titleIconName: PropTypes.string,
      variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
      title: PropTypes.string
    })
  ).isRequired,
  onClose: PropTypes.func,
}

export default Notification
