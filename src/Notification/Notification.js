import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import NotificationItem from './NotificationItem';
import styles from './Notification.module.scss'

class Notification extends Component {
  static propTypes = {
    notifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        description: PropTypes.string,
        title: PropTypes.string
      })
    ).isRequired
  }

  static defaultProps = {
    notifications: []
  }

  state = {}

  render() {
    return (
      <Fragment>
        {this.props.notifications.map(notification => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </Fragment>
    )
  }
}

export default Notification
