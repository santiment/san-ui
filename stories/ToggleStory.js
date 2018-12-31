import React from 'react'
import { storiesOf } from '@storybook/react'
import Toggle from '../src/Toggle'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Toggle', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Toggle onClick={() => console.log('click')} />
      <Toggle isActive onClick={() => console.log('click')} />
    </ColorModeComparison>
  </div>
))
