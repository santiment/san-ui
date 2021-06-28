import React from 'react'
import { storiesOf } from '@storybook/react'
import vars from '../src/variables.scss'
import './ColorStory.scss'

const darks = [
  'jungle-green-dark',
  'jungle-green-dark-2',
  'jungle-green-dark-3',
  'persimmon-dark',
  'persimmon-dark-2',
  'lima-dark',
  'texas-rose-dark',
  'texas-rose-dark-2',
  'texas-rose-dark-3',
  'dodger-blue-dark',
  'heliotrope-dark',
  'heliotrope-dark-2',
  'malibu-dark'
]

const breaksAfter = [
  'shark',
  'mirage-night',
  'jungle-green-dark-3',
  'texas-rose-dark-3',
  'bright-sun-hover',
  'persimmon-dark-2',
  'lima-dark',
  'sheets-hover',
  'dodger-blue-dark',
  'heliotrope-dark-2'
]

storiesOf('Colors', module).add('List of all colors', () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}
  >
    {Object.keys(vars).map(name => (
      <React.Fragment key={name}>
        <div className='color-card' style={{ width: '10%' }}>
          <div
            style={{
              width: 120,
              height: 120,
              background: `var(--${name}, ${vars[name]})`,
              borderRadius: 4
            }}
          />
          <div>
            {name} ({vars[name]})
            {(darks.includes(name) || name.includes('night')) && (
              <p>
                When in night-mode, this color automatically takes place of
                day-mode color synonym
              </p>
            )}
          </div>
        </div>
        {breaksAfter.includes(name) && <div style={{ width: '100%' }} />}
      </React.Fragment>
    ))}
  </div>
))
