import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { HorizontalSelect } from '../src/Select'
import Selector from '../src/Selector/Selector'
import ColorModeComparison from './ColorModeComparison'

storiesOf('HorizontalSelect', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <div>No default selected</div>
      <Selector
        options={['First', 'Second']}
        onSelectOption={action('Selected')}
      />
      <div>Multiple options</div>
      <Selector
        options={['First', 'Second', 'Third']}
        onSelectOption={action('Selected')}
        defaultSelected='Second'
      />
      <div>Border variant</div>
      <Selector
        options={['First', 'Second', 'Third']}
        onSelectOption={action('Selected')}
        defaultSelected='First'
        variant='border'
      />
      <div>Disabled selector</div>
      <Selector
        options={['First', 'Second', 'Third']}
        onSelectOption={action('Selected')}
        defaultSelected='First'
        variant='border'
        disabled
      />
    </ColorModeComparison>
  </div>
))
