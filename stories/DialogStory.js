import React from 'react'
import { storiesOf } from '@storybook/react'
import Dialog from '../src/Dialog'
import Modal from '../src/Modal'
import Button from '../src/Button'

Dialog.ScrollContent.displayName = 'Dialog.ScrollContent'
Dialog.Actions.displayName = 'Dialog.Actions'
Dialog.Cancel.displayName = 'Dialog.Cancel'
Dialog.Approve.displayName = 'Dialog.Approve'

class ControlledDialog extends React.PureComponent {
  state = { open: !!this.props.defaultOpen }

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
        <Dialog
          defaultOpen={this.props.defaultOpen}
          title='test'
          open={this.state.open}
          onClose={this.closeModal}
          withAnimation={this.props.withAnimation}
          preventCloseOnDimmedFromStart
        >
          <Dialog.ScrollContent withPadding>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            quaerat?
          </Dialog.ScrollContent>
          <Dialog.Actions>
            <Dialog.Cancel onClick={this.closeModal}>Close</Dialog.Cancel>
            <Dialog.Approve onClick={this.closeModal}>Publish</Dialog.Approve>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  }
}

const LongText = () =>
  Array(40)
    .fill()
    .map(
      () =>
        `Dictum fusce ut placerat orci. Dolor, sed viverra ipsum nunc aliquet bibendum enim, facilisis gravida neque convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem.
      `
    )

storiesOf('Dialog', module)
  .addParameters({
    info: {
      propTables: [
        Dialog,
        Modal,
        Dialog.ScrollContent,
        Dialog.Actions,
        Dialog.Cancel,
        Dialog.Approve
      ],
      propTablesExclude: [LongText]
    }
  })
  .add('default', () => (
    <Dialog title='test' trigger={<Button>Show</Button>}>
      Unstyled content
    </Dialog>
  ))
  .add('size="s" (width: 480px)', () => (
    <Dialog title='test' size='s' trigger={<Button>Show</Button>}>
      Unstyled content
    </Dialog>
  ))
  .add('size="m" (width: 600px)', () => (
    <Dialog title='test' size='m' trigger={<Button>Show</Button>}>
      Unstyled content
    </Dialog>
  ))

  .add('Without close button', () => (
    <Dialog
      showCloseBtn={false}
      title='Without close button'
      trigger={<Button>test</Button>}
    >
      Unstyled content
    </Dialog>
  ))
  .add('Without title', () => (
    <Dialog size='m' trigger={<Button>test</Button>}>
      <Dialog.ScrollContent withPadding>
        <LongText />
      </Dialog.ScrollContent>
    </Dialog>
  ))
  .add('Scrollable content', () => (
    <Dialog title='test' withAnimation={false} trigger={<Button>Show</Button>}>
      <Dialog.ScrollContent withPadding>
        <LongText />
      </Dialog.ScrollContent>
      <div
        style={{
          padding: '12px 20px'
        }}
      >
        This is static bottom content
      </div>
    </Dialog>
  ))
  .add('Scrollable content with actions', () => (
    <Dialog title='test' withAnimation={false} trigger={<Button>Show</Button>}>
      <Dialog.ScrollContent withPadding>
        <LongText />
      </Dialog.ScrollContent>
      <Dialog.Actions>
        <Dialog.Cancel>Cancel</Dialog.Cancel>
        <Dialog.Approve style={{ marginLeft: 16 }}>Approve</Dialog.Approve>
      </Dialog.Actions>
    </Dialog>
  ))
  .add('Controlled animated Dialog', () => <ControlledDialog />)
  .add('Controlled animated Dialog opened by default', () => (
    <ControlledDialog defaultOpen={true} />
  ))
  .add('Controlled Dialog', () => <ControlledDialog withAnimation={false} />)
  .add('Controlled Dialog opened by default', () => (
    <ControlledDialog withAnimation={false} defaultOpen={true} />
  ))
