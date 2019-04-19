import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '../src/Modal'
import Button from '../src/Button'
import Panel from '../src/Panel/Panel'
import styles from './ModalStory.module.scss'

class ControlledModal extends React.PureComponent {
  state = {
    open: false
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  openModal = () => {
    this.setState({ open: true })
  }

  render () {
    return (
      <>
        <Button onClick={this.openModal}>Open modal</Button>
        <Modal
          title='test'
          as={Panel}
          open={this.state.open}
          onClose={this.closeModal}
          classes={styles}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quaerat?
          <br />
          <Button onClick={this.closeModal}>Close</Button>
          <Button onClick={this.closeModal}>Publish</Button>
        </Modal>
      </>
    )
  }
}

storiesOf('Modal', module)
  .add('default', () => (
    <Modal
      title='test'
      trigger={<Button>Show</Button>}
      onClose={action('onClose')}
      onOpen={action('onOpen')}
      classes={styles}
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
      classes={styles}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
    </Modal>
  ))
  .add('Controlled modal', () => <ControlledModal />)
  .add('Nested modals', () => {
    return (
      <Modal
        title='test'
        trigger={<Button>Show</Button>}
        onClose={action('onClose')}
        onOpen={action('onOpen')}
        as={Panel}
        classes={styles}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
        <Modal
          title='test'
          trigger={<Button>Show</Button>}
          onClose={action('onClose')}
          onOpen={action('onOpen')}
          as={Panel}
          classes={styles}
        >
          nested one
        </Modal>
      </Modal>
    )
  })
