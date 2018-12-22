import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from '../src/Search/Select/Select'
import ColorModeComparison from './ColorModeComparison'

// Dummy array of test values.
const options = Array.from(new Array(1000), (_, index) => ({
  label: `Item ${index}`,
  value: index
}))

const stories = storiesOf('VirtualizedSelect', module)

stories.add('Simple', () => (
  <ColorModeComparison>
    <Select options={options} />
  </ColorModeComparison>
))
