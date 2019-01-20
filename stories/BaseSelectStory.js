import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BaseSelect, { toggleSingle, toggleMultiple } from '../src/Selectors'
import Checkboxes from '../src/Selectors/Checkboxes'
import RadioBtns from '../src/Selectors/RadioBtns'
import ColorModeComparison from './ColorModeComparison'

const Selector = props => (
  <BaseSelect
    className=''
    selectedClassName=''
    disabledClassName=''
    stateReducer={toggleSingle}
    {...props}
  />
)

storiesOf('Base Select', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <div>Radio btns</div>
      <RadioBtns
        options={['Current trends', 'Previous', 'Older']}
        onSelect={action('Selected')}
      />
      <div>With full words</div>
      <Checkboxes
        options={['Current trends', 'Previous', 'Older']}
        disabledIndexes={['Older']}
        onSelect={action('Selected')}
      />
      <div>With full words</div>
      <Selector
        options={['Current trends', 'Previous', 'Older']}
        onSelect={action('Selected')}
      />
      <div>No default selected</div>
      <Selector
        options={['1w', '1m', '3m', '6m', 'all']}
        onSelect={action('Selected')}
      />
      <div>Multiple options</div>
      <Selector
        options={['1w', '1m', '3m', '6m', 'all']}
        onSelect={action('Selected')}
        selectedIndexes={['1m']}
      />
      <div>Border variant</div>
      <Selector
        options={['First', 'Second', 'Third']}
        onSelect={action('Selected')}
        selectedIndexes={['First']}
        variant='border'
      />
      <div>Disabled selector</div>
      <Selector
        options={['First', 'Second', 'Third']}
        onSelect={action('Selected')}
        selectedIndexes={['First']}
        variant='border'
        disabled
      />
    </ColorModeComparison>
  </div>
))
