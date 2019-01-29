import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/Button/Button'
import ColorModeComparison from './ColorModeComparison'

const CustomA = ({ children, className, to }) => (
  <a href={to} className={className}>
    {children}
  </a>
)

storiesOf('Button', module)
  .add('Filled', () => (
    <div>
      <ColorModeComparison>
        <Button variant='fill' accent='grey'>
          Grey fill
        </Button>
        <Button variant='fill' accent='negative'>
          Negative fill
        </Button>
        <Button variant='fill' accent='positive'>
          Positive fill
        </Button>
        <Button variant='fill' accent='purple'>
          Purple fill
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Bordered', () => (
    <div>
      <ColorModeComparison>
        <Button border accent='negative'>
          Negative border
        </Button>
        <Button border accent='positive'>
          Positive border
        </Button>
        <Button border accent='purple'>
          Purple border
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('as Prop', () => (
    <div>
      <ColorModeComparison>
        <Button as='a'>Specified as a string</Button>
        <Button as={CustomA}>Custom React Element</Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Flated', () => (
    <div>
      <ColorModeComparison>
        <Button variant='flat'>Flat Button</Button>
        <Button border variant='flat'>
          Flat Border Button
        </Button>
        <Button variant='flat' isActive>
          Flat Active Button
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Flated (Fluid)', () => (
    <div>
      <ColorModeComparison>
        <Button fluid variant='flat'>
          Flat Button
        </Button>
        <Button fluid border variant='flat'>
          Flat Border Button
        </Button>
        <Button fluid variant='flat' isActive>
          Flat Active Button
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Ghosted', () => (
    <div>
      <ColorModeComparison>
        <Button variant='ghost'>Ghost Button</Button>
        <Button border variant='ghost'>
          Ghost Border Button
        </Button>
        <Button variant='ghost' isActive>
          Ghost Active Button
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Ghosted (fluid)', () => (
    <div>
      <ColorModeComparison>
        <Button fluid variant='ghost'>
          Ghost Button
        </Button>
        <Button fluid border variant='ghost'>
          Ghost Border Button
        </Button>
        <Button fluid variant='ghost' isActive>
          Ghost Active Button
        </Button>
      </ColorModeComparison>
    </div>
  ))
