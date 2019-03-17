import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '../src/Tooltip'

const Example = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
      }}
    >
      <div
        className='top'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
      <div
        className='mid'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
      <div
        className='bottom'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
    </div>
  )
}

storiesOf('Tooltip', module)
  .add('align: "top", on: "hover"', () => (
    <Example align='top' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "right"', () => (
    <Example align='right' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "bottom"', () => (
    <Example align='bottom' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "left"', () => (
    <Example align='left' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
