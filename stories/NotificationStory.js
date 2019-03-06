import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Notification from '../src/Notification'
import ColorModeComparison from './ColorModeComparison'

const notifications = [
  {
    id: 1,
    description: 'This is a simple text description',
    title: 'Error',
    variant: 'error'
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
    title: 'A really long notification title that will let the text go down to the next line',
    variant: 'error',
  },
  {
    id: 6,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    variant: 'warning',
  },
  {
    id: 7,
    description: 'Notification without title icon',
    title: 'Info',
    variant: 'info',
    hideTitleIcon: true,
  },
  {
    id: 8,
    description: 'Simple Notification with a custom icon ',
    title: 'Processing',
    variant: 'info',
    titleIconName: 'clock',
    timeout: 3000,
  },
];

const showNotificationAlert = notification => alert(`Action button on notification ${notification.id} clicked`);

const notificationsWithActionButtons = [
  {
    id: 1,
    description: 'This is a simple text description',
    title: 'Error',
    variant: 'error',
    actions: [
      {
        label: 'Button',
        onClick: showNotificationAlert,
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
        onClick: showNotificationAlert,
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
        onClick: showNotificationAlert,
      },
      {
        label: 'Button 2',
        onClick: showNotificationAlert,
      }
    ]
  }
]

class NotificationExample extends Component {
  constructor(props) {
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

  render() {
    return (
      this.state.notifications.map(
        notification => (
          <Notification
            style={{ marginBottom: 15 }}
            key={notification.id}
            onClose={() => this.closeNotification(notification.id)}
            {...notification}
          />
        ))
    )
  }
}

storiesOf('Notifications', module)
  .add('Default', () => (
    <ColorModeComparison>
      <NotificationExample notifications={notifications} />
    </ColorModeComparison>
  ))
  .add('With solid fills', () => (
    <ColorModeComparison>
      <NotificationExample
        notifications={notifications.map(notification => ({ ...notification, solidFill: true }))}
      />
    </ColorModeComparison>
  ))
  .add('With action buttons', () => {
    return (
      <ColorModeComparison>
        <NotificationExample notifications={notificationsWithActionButtons} />
      </ColorModeComparison>
    )
  })
  .add('With action buttons and solid fills', () => {
    return (
      <ColorModeComparison>
        <NotificationExample
          notifications={notificationsWithActionButtons.map(
            notification => ({ ...notification, solidFill: true })
          )}
        />
      </ColorModeComparison>
    )
  })
