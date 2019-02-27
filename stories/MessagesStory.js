import React from 'react'
import { storiesOf } from '@storybook/react'
import Message from '../src/Message'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Messages', module)
  .add('Default', () => (
    <ColorModeComparison>
      <Message>
        This is a message with default type.
      </Message>

      <Message variant="info">
        You guessed it right, this is same as default.
      </Message>

      <Message variant="error">
        Message with error type
      </Message>

      <Message variant="success">
      Message with success type
      </Message>

      <Message variant="warn">
        Message with warn type
      </Message>
    </ColorModeComparison>
  ))
  .add('Messages with Icon', () => (
    <ColorModeComparison>
      <Message variant="info" icon="help-round">
        You guessed it right, this is same as default.
      </Message>

      <Message variant="error" icon="close">
        Message with error type
      </Message>

      <Message variant="success" icon="checkmark">
      Message with success type
      </Message>

      <Message variant="warn" icon="alert">
        Message with warn type
      </Message>
    </ColorModeComparison>
  ));
