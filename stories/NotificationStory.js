import React from 'react'
import { storiesOf } from '@storybook/react'
import Notification from '../src/Notification'
import ColorModeComparison from './ColorModeComparison'

const notifications = [
  {
    id: 1,
    description: 'This is a simple text description',
    title: 'Big Bold Title',
  },
  {
    id: 2,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

storiesOf('Notifications', module)
  .add('Default', () => (
    <ColorModeComparison>
      <Notification notifications={notifications} />
    </ColorModeComparison>
  ))
