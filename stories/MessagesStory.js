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

      <Message fill={false} variant='info'>
        Message with variant = "info" and fill="false"
      </Message>

      <Message fill={false} variant='error'>
        Message with variant = "error" and fill="false"
      </Message>

      <Message fill={false} variant='success'>
        Message with variant = "success" and fill="false"
      </Message>

      <Message fill={false} variant='warn'>
        Message with variant = "warn" and fill="false"
      </Message>
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

      <Message fill={false} variant='info' icon='info-round'>
        Message with variant = "info" and fill="false"
      </Message>

      <Message fill={false} variant='error' icon='error'>
        Message with variant = "error" and fill="false"
      </Message>

      <Message fill={false} variant='success' icon='success-round'>
        Message with variant = "success" and fill="false"
      </Message>

      <Message fill={false} variant='warn' icon='info-round'>
        Message with variant = "warn" and fill="false"
      </Message>
    </ColorModeComparison>
  ))
