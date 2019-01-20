import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioBtns from '../src/Selectors/RadioBtns'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Radio Buttons', module)
  .add('Normal', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <RadioBtns
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <RadioBtns
          options={['Current trends', 'Previous', 'Older']}
          selectedIndex={'Older'}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <RadioBtns
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <RadioBtns
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
  .add('Normal: Label on the right', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <RadioBtns
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <RadioBtns
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          selectedIndex={'Older'}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <RadioBtns
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <RadioBtns
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
  .add('Fluid', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <RadioBtns
          fluid
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <RadioBtns
          fluid
          options={['Current trends', 'Previous', 'Older']}
          selectedIndex={'Older'}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <RadioBtns
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <RadioBtns
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))

  .add('Fluid: Label on the right', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <RadioBtns
          fluid
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <RadioBtns
          labelOnRight
          fluid
          options={['Current trends', 'Previous', 'Older']}
          selectedIndex={'Older'}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <RadioBtns
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <RadioBtns
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
