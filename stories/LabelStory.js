import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '../src/Label'
import ColorModeComparison from './ColorModeComparison'

const accents = [
  'Athens',
  'Casper',
  'Waterloo',
  'Jungle-Green',
  'Texas-Rose',
  'Persimmon',
  'Dodger-Blue',
  'Heliotrope',
  'Malibu'
]

const Example = ({ children, ...props }) =>
  accents.map(accent => (
    <>
      <Label {...props} accent={accent.toLowerCase()} key={accent}>
        {children(accent.replace('-', ' '))}
      </Label>
      <div style={{ padding: 5 }} />
    </>
  ))

storiesOf('Label', module)
  .add('default', () => (
    <ColorModeComparison>
      <div>
        <Example fill>{acc => acc}</Example>
      </div>
    </ColorModeComparison>
  ))

  .add('round', () => (
    <ColorModeComparison>
      <div>
        <Example round fill>
          {acc => '5'}
        </Example>
        <Example round fill>
          {acc => acc}
        </Example>
      </div>
    </ColorModeComparison>
  ))
