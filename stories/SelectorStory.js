import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Selector from '../src/Selector/Selector'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Selector', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <div>With full words</div>
      <Selector
        options={['Current trends', 'Previous', 'Older']}
        onSelectOption={action('Selected')}
      />
      <div>No default selected</div>
      <Selector
        options={['1w', '1m', '3m', '6m', 'all']}
        onSelectOption={action('Selected')}
      />
      <div>Multiple options</div>
      <Selector
        options={['1w', '1m', '3m', '6m', 'all']}
        onSelectOption={action('Selected')}
        defaultSelected='1m'
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
