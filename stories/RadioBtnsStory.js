import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioBtns from '../src/RadioBtns'
import Button from '../src/Button'
import ColorModeComparison from './ColorModeComparison'

class Example extends React.Component {
  state = {
    selectedOption: ''
  }

  onSelect = option => {
    this.setState({ selectedOption: option })
  }

  render () {
    const { selectedOption } = this.state
    return (
      <div>
        <RadioBtns
          onSelect={this.onSelect}
          options={['First', 'Second', 'Third']}
        />
        <h4>Selected option: {selectedOption}</h4>
      </div>
    )
  }
}

storiesOf('Radio Buttons', module)
  .add('Normal', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <RadioBtns
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
          style={{ marginRight: '15px' }}
        />
        <div>Options with selected index by the default</div>
        <RadioBtns
          options={['Current trends', 'Previous', 'Older']}
          defaultSelectedIndex='Older'
          onSelect={action('Selected')}
          style={{ marginRight: '15px' }}
        />
        <div>Specified disabled options with no selected by the default</div>
        <RadioBtns
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
          style={{ marginRight: '15px' }}
        />
        <div>Selected disabled option</div>
        <RadioBtns
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
          style={{ marginRight: '15px' }}
        />
        <div>SelectItem rendered as "Button" element via "as" prop.</div>
        <RadioBtns
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          as={props => <Button variant='ghost' {...props} />}
          onSelect={action('Selected')}
          style={{ marginRight: '15px' }}
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
          defaultSelectedIndex='Older'
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
          defaultSelectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>SelectItem rendered as "Button" element via "as" prop.</div>
        <RadioBtns
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          as={props => <Button variant='ghost' {...props} />}
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
          defaultSelectedIndex={'Older'}
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
          defaultSelectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>SelectItem rendered as "Button" element via "as" prop.</div>
        <RadioBtns
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          as={props => <Button variant='ghost' {...props} />}
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
          defaultSelectedIndex={'Older'}
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
          defaultSelectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>SelectItem rendered as "Button" element via "as" prop.</div>
        <RadioBtns
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          as={props => <Button variant='ghost' {...props} />}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
  .add('Custom index and content', () => (
    <RadioBtns
      labelOnRight
      options={[
        { index: 1, content: 'This is the content of the first option' },
        { index: 2, content: 'Second option' }
      ]}
      defaultSelectedIndex={1}
      as={props => <Button variant='ghost' {...props} />}
      onSelect={action('Selected')}
    />
  ))
  .add('Usage example', () => <Example />)
