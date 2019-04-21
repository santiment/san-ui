import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ContextMenu from '../src/ContextMenu'
import Button from '../src/Button'
import Panel from '../src/Panel/Panel'
import styles from './ModalStory.module.scss'

class ControlledContextMenu extends React.PureComponent {
  state = {
    open: false
  }

  closeContextMenu = () => {
    this.setState({ open: false })
  }

  openContextMenu = () => {
    this.setState({ open: true })
  }

  render () {
    return (
      <>
        <ContextMenu
          open={this.state.open}
          onClose={this.closeContextMenu}
          trigger={<button onClick={this.openContextMenu}>Show</button>}
          position='bottom'
          classes={styles}

          // classes={styles}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quaerat?
          <br />
          <Button onClick={this.closeContextMenu}>Close</Button>
          <Button onClick={this.closeContextMenu}>Publish</Button>
        </ContextMenu>
      </>
    )
  }
}

storiesOf('ContextMenu', module)
  .add('default', () => (
    <div>
      <ContextMenu
        trigger={<button>Show</button>}
        onClose={action('onClose')}
        onOpen={action('onOpen')}
        position='bottom'
        classes={styles}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
      </ContextMenu>
      <div style={{ padding: 500 }} />
      <ContextMenu
        trigger={<button>Show</button>}
        onClose={action('onClose')}
        onOpen={action('onOpen')}
        position='bottom'
        classes={styles}
      >
        <Panel>
          <Panel.Title>test</Panel.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          quaerat?
        </Panel>
      </ContextMenu>
    </div>
  ))
  .add('opened by default', () => (
    <ContextMenu
      trigger={<button>Show</button>}
      onClose={action('onClose')}
      onOpen={action('onOpen')}
      position='bottom'
      defaultOpen
      classes={styles}
    >
      <Panel padding>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quaerat?
      </Panel>
    </ContextMenu>
  ))

  .add('controlled', () => <ControlledContextMenu />)
