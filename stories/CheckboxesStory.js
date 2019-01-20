import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Checkboxes from '../src/Selectors/Checkboxes'
import Button from '../src/Button'
import ColorModeComparison from './ColorModeComparison'

class Example extends React.Component {
  state = {
    selectedOptions: []
  }

  onSelect = (newSelection, state) => {
    this.setState({ selectedOptions: state.selectedIndexes })
  }

  render() {
    const { selectedOptions } = this.state
    return (
      <div>
        <Checkboxes
          onSelect={this.onSelect}
          options={['First', 'Second', 'Third']}
        />
        <h4>Selected option: {selectedOptions.join(', ')}</h4>
      </div>
    )
  }
}

storiesOf('Checkboxes', module)
  .add('Normal', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <Checkboxes
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <Checkboxes
          options={['Current trends', 'Previous', 'Older']}
          selectedIndexes={['Older']}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <Checkboxes
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <Checkboxes
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Select wrapper rendered as "Button" element via "as" prop.</div>
        <Checkboxes
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          as={props => <Button variant='ghost' {...props} />}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
  .add('Normal: Label on the right', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <Checkboxes
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <Checkboxes
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          selectedIndexes={['Older']}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <Checkboxes
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <Checkboxes
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Select wrapper rendered as "Button" element via "as" prop.</div>
        <Checkboxes
          labelOnRight
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
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
        <Checkboxes
          fluid
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <Checkboxes
          fluid
          options={['Current trends', 'Previous', 'Older']}
          selectedIndexes={['Older']}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <Checkboxes
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <Checkboxes
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Select wrapper rendered as "Button" element via "as" prop.</div>
        <Checkboxes
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
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
        <Checkboxes
          fluid
          labelOnRight
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <Checkboxes
          labelOnRight
          fluid
          options={['Current trends', 'Previous', 'Older']}
          selectedIndexes={['Older']}
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <Checkboxes
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <Checkboxes
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Select wrapper rendered as "Button" element via "as" prop.</div>
        <Checkboxes
          labelOnRight
          fluid
          options={['1w', '1m', '3m', '6m', 'all']}
          selectedIndexes={['1m']}
          as={props => <Button variant='ghost' {...props} />}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))
  .add('Usage example', () => <Example />)
