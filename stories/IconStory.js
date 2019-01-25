import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon, { icons } from '../src/Icon'

storiesOf('Icon', module).add('All', () => (
  <div style={{ display: 'flex' }}>
    {Object.keys(icons).map(iconKey => {
      return (
        <div
          key={iconKey}
          style={{
            padding: '11px',
            background: '#f7f8f9',
            borderRadius: '4px',
            width: 40,
            height: 40,
            margin: '0 10px 10px 0',
            boxSizing: 'border-box',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon type={iconKey} fill='#000' />
        </div>
      )
    })}
  </div>
))
