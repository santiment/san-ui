import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorModeComparison from './ColorModeComparison'
import styles from '../src/Colors.module.scss'

const ColorDummy = ({color, title, description}) => 
  <div style={{
    marginRight: '1em',
    marginTop: '1em',
    flex: '1 0 18%'
  }}>
    <div 
      style={{
        width: 120,
        height: 120,
        border: '1px solid gray',
        borderRadius: 4
      }}
      className={styles[color]} />
    <label>{title}</label>
    <br />
    <small>{description}</small>
  </div>

  storiesOf('Colors', module)
    .add('List of all colors', () => (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      <ColorDummy 
        color='white'
        title='White'
        description='Used for text, icons, hover and background' />
      <ColorDummy 
        color='light-gray'
        title='Light gray'
        description='Used for background and for some elements' />
      <ColorDummy 
        color='light-gray2'
        title='Light gray 2'
        description='Used for lines' />
      <ColorDummy 
        color='light-gray3'
        title='Light gray 3'
        description='Used for borders of form, boxes, buttons' />
      <ColorDummy 
        color='dark-gray'
        title='Dark gray'
        description='Used for text, icons' />
      <ColorDummy 
        color='dark-gray2'
        title='Dark gray 2'
        description='Used for text, icons' />
      <ColorDummy 
        color='black'
        title='Black'
        description='Used for text, icons' />
      <ColorDummy 
        color='green'
        title='Green'
        description='Main color' />
      <ColorDummy 
        color='green-hover'
        title='Green hover'
        description='hover' />
      <ColorDummy 
        color='green-light'
        title='Green light'
        description='Active' />
      <ColorDummy 
        color='orange'
        title='Orange'
        description='User for some elements' />
      <ColorDummy 
        color='orange-hover'
        title='Orange hover'
        description='Hover' />
      <ColorDummy 
        color='blue'
        title='Blue'
        description='Used mostly for links' />
      <ColorDummy 
        color='red'
        title='Red'
        description='Used mostly for alerts' />
      <ColorDummy 
        color='violet'
        title='Violet'
        description='Used for some elements' />
    </div>
    ))
