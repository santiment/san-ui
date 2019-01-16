import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { HorizontalSelect } from '../src/Select'
import Selector from '../src/Selector/Selector'
import ColorModeComparison from './ColorModeComparison'

storiesOf('HorizontalSelect', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <HorizontalSelect
        options={['First', 'Second']}
        onSelect={action('Selected')}
      />
      <div>Specified default 'selectedIndex=1'</div>
      <HorizontalSelect
        options={['First', 'Second']}
        selectedIndex={1}
        onSelect={action('Selected')}
      />
      <div>Multiple options</div>
      <HorizontalSelect
        options={['First', 'Second', 'Third']}
        onSelect={action('Selected')}
        variant='border'
      />
      <Selector
        options={['First', 'Second', 'Third']}
        onSelectOption={action('Selected')}
        defaultSelected='First'
      />
    </ColorModeComparison>
  </div>
))
