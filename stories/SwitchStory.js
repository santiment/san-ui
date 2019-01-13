import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from '../src/Select/Select'

import ColorModeComparison from './ColorModeComparison'

storiesOf('Select', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Select options={['First', 'Second']} onSelect={action('Selected')} />
      <Select
        options={['First', 'Second']}
        selectedIndex={1}
        onSelect={action('Selected')}
      />
      <Select
        options={['First', 'Second', 'Third']}
        onSelect={action('Selected')}
      />
    </ColorModeComparison>
  </div>
))
