import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import Switch from '../src/Switch'
import ColorModeComparison from './ColorModeComparison'

class StateWrapper extends Component {
  state = {
    isSwitched: this.props.render.props.isSwitched
  }

  onClick = () => {
    this.setState({ isSwitched: !this.state.isSwitched })
  }

  render () {
    return React.cloneElement(this.props.render, {
      onClick: this.onClick,
      isSwitched: this.state.isSwitched
    })
  }
}

storiesOf('Switch', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <StateWrapper render={<Switch option1='First' option2='Second' />} />
      <StateWrapper
        render={<Switch option1='First' option2='Second' isSwitched />}
      />
    </ColorModeComparison>
  </div>
))
