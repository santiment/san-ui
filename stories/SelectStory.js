import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Select from '../src/Select/Select'
import ColorModeComparison from './ColorModeComparison'

// Dummy array of test values.
const options = Array.from(new Array(1000), (_, index) => ({
  label: `Item ${index}`,
  value: index
}))

const stories = storiesOf('VirtualizedSelect', module)

stories.add('Simple', () => (
  <ColorModeComparison>
    <Select isDisabled options={options} />
    <Select options={options} />
    <Select options={options} isError errorText='404' />
  </ColorModeComparison>
))

const SelectExample = () => {
  const [values, setValues] = useState([])

  const handleValuesChange = option => {
    if (Array.isArray(option)) {
      setValues(option)
    } else {
      setValues([...values, option])
    }
  }

  return (
    <Select
      options={options}
      isMulti
      value={values}
      onChange={handleValuesChange}
    />
  )
}

stories.add('Open options menu', () => (
  <ColorModeComparison>
    <SelectExample />
  </ColorModeComparison>
))
