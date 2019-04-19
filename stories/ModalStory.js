import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '../src/Modal'
import Button from '../src/Button'
import Panel from '../src/Panel/Panel'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal
      title='test'
      trigger={<Button>Show</Button>}
      onClose={action('onClose')}
      onOpen={action('onOpen')}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
    </Modal>
  ))
  .add('rendered "as" element', () => (
    <Modal
      title='test'
      trigger={<Button>Show</Button>}
      onClose={action('onClose')}
      onOpen={action('onOpen')}
      as={Panel}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
    </Modal>
  ))
