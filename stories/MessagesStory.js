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

      <Message type="info">
        You guessed it right, this is same as default.
      </Message>
    
      <Message type="error">
        Message with error type
      </Message>
    
      <Message type="success">
      Message with success type
      </Message>
    
      <Message type="warn">
        Message with warn type
      </Message>
    </ColorModeComparison>
  ));
  