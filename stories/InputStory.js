import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '../src/Input/Input'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Input', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Input defaultValue='Built-in value' />
      <Input placeholder='Placeholder' />
      <Input defaultValue='Disabled Built-in value' disabled />
      <Input defaultValue='Read-only Built-in value' readOnly />
      <Input isError defaultValue='Error case' />
      <Input defaultValue='inplace username' inplace />
    </ColorModeComparison>
  </div>
))
