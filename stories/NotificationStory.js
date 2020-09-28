import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Notification from '../src/Notification'
import ColorModeComparison from './ColorModeComparison'
import styles from './NotificationStory.module.scss'

const Description = () => (
  <div style={{ backgroundColor: '#dfdfdf', padding: 10 }}>
    A custom description element
  </div>
)

const notifications = [
  {
    id: 1,
    description: 'This is a simple text description',
    title: 'Error',
    variant: 'error',
    actions: []
  },
  {
    id: 2,
    description: 'This is a simple text description',
    title: 'Info',
    variant: 'info'
  },
  {
    id: 3,
    description: 'This is a simple text description',
    title: 'Warning',
    variant: 'warning'
  },
  {
    id: 4,
    description: 'This is a simple text description',
    title: 'Success',
    variant: 'success'
  },
  {
    id: 5,
    description: 'This is a simple text description',
    title:
      'A really long notification title that will let the text go down to the next line',
    variant: 'error'
  },
  {
    id: 7,
    description: 'Simple Notification with a custom icon ',
    title: 'Processing',
    variant: 'info',
    titleIconName: 'clock'
  },
  {
    id: 8,
    title: 'Notification without a description',
    variant: 'info'
  },
  {
    id: 9,
    title: 'Notification with custom description',
    variant: 'info',
    description: <Description />
  },
  {
    id: 10,
    description: 'This is a simple text description',
    title: 'Any',
    actions: []
  },
  {
    id: 11,
    title: 'Notification without close button',
    variant: 'info',
    hasCloseBtn: false
  },
  {
    id: 12,
    title: 'Small notification without close button',
    variant: 'error',
    size: 'small',
    hasCloseBtn: false
  }
]

const showNotificationAlert = notification =>
  alert(`Action button on notification ${notification.id} clicked`)

const notificationsWithActionButtons = [
  {
    id: 1,
    description: 'This is a simple text description',
    title: 'Error',
    variant: 'error',
    actions: [
      {
        label: 'Button',
        onClick: showNotificationAlert
      }
    ]
  },
  {
    id: 2,
    description: 'This is a simple text description',
    title: 'Info',
    variant: 'info',
    actions: [
      {
        label: 'Button',
        onClick: showNotificationAlert
      }
    ]
  },
  {
    id: 3,
    description: 'This is a simple text description',
    title: 'Warning',
    variant: 'warning',
    actions: [
      {
        label: 'Button 1',
        onClick: showNotificationAlert
      },
      {
        label: 'Button 2',
        onClick: showNotificationAlert
      }
    ]
  }
]

class NotificationExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notifications: props.notifications
    }
  }

  closeNotification = notificationId => {
    this.setState(({ notifications }) => ({
      notifications: notifications.filter(({ id }) => id !== notificationId)
    }))
  }

  render () {
    return this.state.notifications.map(notification => (
      <Notification
        className={styles.notification}
        key={notification.id}
        onClose={() => this.closeNotification(notification.id)}
        {...notification}
      />
    ))
  }
}

storiesOf('Notifications', module)
  .add('Default', () => (
    <ColorModeComparison>
      <NotificationExample notifications={notifications} />
    </ColorModeComparison>
  ))
  .add('With action buttons', () => {
    return (
      <ColorModeComparison>
        <NotificationExample notifications={notificationsWithActionButtons} />
      </ColorModeComparison>
    )
  })
