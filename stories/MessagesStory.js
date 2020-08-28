import React from 'react'
import { storiesOf } from '@storybook/react'
import Message from '../src/Message'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Messages', module)
  .add('Default', () => (
    <ColorModeComparison>
      <Message>This is a message with default type.</Message>

      <Message variant='info'>
        Message with variant = "info" (the same as default)
      </Message>

      <Message variant='error'>Message with variant = "error"</Message>

      <Message variant='success'>Message with variant = "success"</Message>

      <Message variant='warn'>Message with variant = "warn"</Message>
    </ColorModeComparison>
  ))
  .add('Messages with Icon', () => (
    <ColorModeComparison>
      <Message variant='info' icon='info-round'>
        Message with variant = "info" (the same as default)
      </Message>

      <Message variant='error' icon='error'>
        Message with variant = "error"
      </Message>

      <Message variant='success' icon='success-round'>
        Message with variant = "success"
      </Message>

      <Message variant='warn' icon='info-round'>
        Message with variant = "warn"
      </Message>
    </ColorModeComparison>
  ))
