import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from '../src/Panel/Panel'
import vars from '../src/variables.scss'
import './ColorStory.scss'

const darks = [
  'ebony-clay',
  'ebony-clay',
  'cloud-burst',
  'rhino',
  'fiord',
  'bali-hai',
  'jungle-green-dark',
  'jungle-green-dark-2',
  'persimmom-dark',
  'lima-dark',
  'texas-rose-dark',
  'dodger-blue-dark',
  'heliotrope-dark',
  'malibu-dark'
]

const breaksAfter = [
  'shark',
  'bali-hai',
  'jungle-green-accent',
  'texas-rose-dark',
  'persimmon-dark',
  'lima-dark',
  'sheets-hover',
  'dodger-blue-dark',
  'heliotrope-dark'
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
            {darks.includes(name) && (
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
