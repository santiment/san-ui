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
    <React.Fragment key={accent}>
      <Label {...props} accent={accent.toLowerCase()}>
        {children(accent.replace('-', ' '))}
      </Label>
      <div style={{ padding: 5 }} />
    </React.Fragment>
  ))

storiesOf('Label', module)
  .add('default', () => (
    <ColorModeComparison>
      <div>
        <Label>No accent</Label>
        <br />
        <Example>{acc => acc}</Example>
      </div>
    </ColorModeComparison>
  ))
  .add('bordered', () => (
    <ColorModeComparison>
      <div>
        <Example variant='border'>{acc => acc}</Example>
      </div>
    </ColorModeComparison>
  ))
  .add('fill', () => (
    <ColorModeComparison>
      <div>
        <Example variant='fill'>{acc => acc}</Example>
      </div>
    </ColorModeComparison>
  ))

  .add('round', () => (
    <ColorModeComparison>
      <div>
        <Example variant='round'>{acc => '5'}</Example>
        <Example variant='round'>{acc => acc}</Example>
      </div>
    </ColorModeComparison>
  ))

  .add('circle', () => (
    <ColorModeComparison>
      <div>
        <Example variant='circle'>{acc => ''}</Example>
      </div>
    </ColorModeComparison>
  ))
