import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NotificationItem from './NotificationItem';

const Notification = props => (
  <Fragment>
    {props.notifications.map(notification => (
      <NotificationItem
        key={notification.id}
        onClose={() => props.onClose(notification)}
        {...notification}
      />
    ))}
  </Fragment>
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
