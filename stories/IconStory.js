import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon, { icons } from '../src/Icon'

storiesOf('Icon', module).add('All', () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(icons).map(iconKey => {
      return (
        <div
          key={iconKey}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
            margin: '0 4px 4px 0',
            minWidth: 60,
            fontSize: 11,
            flex: '0 0 6%'
          }}
        >
          <div
            style={{
              padding: '10px',
              background: '#f7f8f9',
              borderRadius: '4px',
              width: 48,
              height: 48,
              marginBottm: 2,
              boxSizing: 'border-box',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Icon type={iconKey} fill='#2F354D' />
          </div>
          {iconKey}
        </div>
      )
    })}
  </div>
))
