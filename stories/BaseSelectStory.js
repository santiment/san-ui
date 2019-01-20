import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BaseSelect, { toggleSingle, toggleMultiple } from '../src/BaseSelect'
import ColorModeComparison from './ColorModeComparison'

const LabeledSelector = ({ labels, container: Container, ...props }) => (
  <BaseSelect
    options={labels.map(label => ({
      index: label,
      content: <Container label={label} />
    }))}
    {...props}
  />
)

const RadioContainer = ({ label }) => (
  <>
    {label}
    <div />
  </>
)

const RadioBtns = ({ options, ...props }) => {
  return (
    <LabeledSelector
      labelOnRight
      classNames={{}}
      labels={options}
      container={RadioContainer}
      stateReducer={toggleSingle}
      {...props}
    />
  )
}

const Selector = props => (
  <BaseSelect classNames={{}} stateReducer={toggleSingle} {...props} />
)

const Checkboxes = props => (
  <BaseSelect classNames={{}} stateReducer={toggleMultiple} {...props} />
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
