import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/Button/Button'
import Icon from '../src/Icon/Icon'
import ColorModeComparison from './ColorModeComparison'

const CustomA = ({ children, className, to }) => (
  <a href={to} className={className}>
    {children}
  </a>
)

storiesOf('Button', module)
  .add('default', () => (
    <div>
      <ColorModeComparison>
        <Button>Default button</Button>
        <Button accent='positive'>Default button</Button>
        <Button accent='negative'>Default button</Button>
        <Button accent='purple'>Default button</Button>
        <Button disabled>Default disabled button</Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Bordered', () => (
    <div>
      <ColorModeComparison>
        <Button border>Default</Button>
        <Button border accent='negative'>
          Negative border
        </Button>
        <Button border accent='positive'>
          Positive border
        </Button>
        <Button border accent='purple'>
          Purple border
        </Button>
        <Button border accent='purple'>
          <Icon type='search' /> With Icon
        </Button>
        <hr />
        <Button border accent='positive' disabled>
          Disabled
        </Button>
        <Button border accent='purple' disabled>
          <Icon type='search' /> With Icon
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('as Prop', () => (
    <div>
      <ColorModeComparison>
        <Button as='a'>Specified as "&lt;a /&gt;" string</Button>
        <Button as={CustomA}>Custom React Element</Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Variant: "fill"', () => (
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
        <Button variant='fill' accent='purple'>
          <Icon type='search' /> With Icon
        </Button>
        <hr />
        <Button variant='fill' accent='positive' disabled>
          Disabled
        </Button>

        <Button variant='fill' accent='purple' disabled>
          <Icon type='search' /> With Icon
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Variant: "flat"', () => (
    <div>
      <ColorModeComparison>
        <Button variant='flat'>Flat Button</Button>
        <Button border variant='flat'>
          Flat Border Button
        </Button>
        <Button variant='flat' isActive>
          Flat Active Button
        </Button>
        <Button variant='flat'>
          <Icon type='search' /> With Icon
        </Button>
        <hr />
        <Button variant='flat' accent='positive' disabled>
          Disabled
        </Button>
        <Button variant='flat' disabled>
          <Icon type='search' /> With Icon
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Variant: "flat" (fluid)', () => (
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
  .add('Variant: "ghost"', () => (
    <div>
      <ColorModeComparison>
        <Button variant='ghost'>Ghost Button</Button>
        <Button border variant='ghost'>
          Ghost Border Button
        </Button>
        <Button variant='ghost' isActive>
          Ghost Active Button
        </Button>
        <Button variant='ghost'>
          <Icon type='search' /> With Icon
        </Button>
        <hr />
        <Button variant='ghost' accent='positive' disabled>
          Disabled
        </Button>
        <Button variant='ghost' disabled>
          <Icon type='search' /> With Icon
        </Button>
      </ColorModeComparison>
    </div>
  ))
  .add('Variant: "ghost" (fluid)', () => (
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
