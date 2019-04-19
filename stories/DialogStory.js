import React from 'react'
import { storiesOf } from '@storybook/react'
import Dialog from '../src/Modal/Dialog'
import Button from '../src/Button'

Dialog.ScrollContent.displayName = 'Dialog.ScrollContent'
Dialog.Actions.displayName = 'Dialog.Actions'
Dialog.Cancel.displayName = 'Dialog.Cancel'
Dialog.Approve.displayName = 'Dialog.Approve'

storiesOf('Dialog', module)
  .addParameters({
    info: {
      propTables: [
        Dialog,
        Dialog.ScrollContent,
        Dialog.Actions,
        Dialog.Cancel,
        Dialog.Approve
      ]
    }
  })
  .add('default', () => (
    <Dialog title='test' trigger={<Button>Show</Button>}>
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
  .add('Scrollable content', () => (
    <Dialog title='test' trigger={<Button>Show</Button>}>
      <Dialog.ScrollContent withPadding>
        {Array(10)
          .fill()
          .map(
            () =>
              `Dictum fusce ut placerat orci. Dolor, sed viverra ipsum nunc aliquet bibendum enim, facilisis gravida neque convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem.
`
          )}
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
    <Dialog title='test' trigger={<Button>Show</Button>}>
      <Dialog.ScrollContent withPadding>
        {Array(10)
          .fill()
          .map(
            () =>
              `Dictum fusce ut placerat orci. Dolor, sed viverra ipsum nunc aliquet bibendum enim, facilisis gravida neque convallis a cras semper auctor neque, vitae tempus quam pellentesque nec nam aliquam sem.
              `
          )}
      </Dialog.ScrollContent>
      <Dialog.Actions>
        <Dialog.Cancel>Cancel</Dialog.Cancel>
        <Dialog.Approve style={{ marginLeft: 16 }}>Approve</Dialog.Approve>
      </Dialog.Actions>
    </Dialog>
  ))
