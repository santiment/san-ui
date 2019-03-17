import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '../src/Tooltip'

storiesOf('Tooltip', module).add('on: "hover"', () => (
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
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
    </div>

    <div
      className='mid'
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
    </div>

    <div
      className='bottom'
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
      <Tooltip trigger={<span>trigger</span>}>
        test afisudhfoaidsufh content
      </Tooltip>
    </div>
  </div>
))
