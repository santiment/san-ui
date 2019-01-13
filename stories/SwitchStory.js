import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Switch from '../src/Switch/Select'

import ColorModeComparison from './ColorModeComparison'

storiesOf('Switch', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Switch options={['First', 'Second']} onSelect={action('Selected')} />
      <Switch
        options={['First', 'Second']}
        selectedIndex={1}
        onSelect={action('Selected')}
      />
      <Switch
        options={['First', 'Second', 'Third']}
        onSelect={action('Selected')}
      />
    </ColorModeComparison>
  </div>
))
