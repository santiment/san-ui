import React from 'react'
import { storiesOf } from '@storybook/react'
import Switch from '../src/Switch'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Switch', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Switch option1='First' option2='Second' />
      <Switch option1='First' option2='Second' isSwitched />
    </ColorModeComparison>
  </div>
))
