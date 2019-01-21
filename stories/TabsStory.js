import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tabs from '../src/Selectors/Tabs'
import Button from '../src/Button'
import ColorModeComparison from './ColorModeComparison'

const tabs = {
  First: 'This is the content of the "First" tabs',
  Second: 'Some other content of the "Second" tabs',
  Third: 'The content of the last tabs "Third"'
}

class Example extends React.Component {
  state = {
    selectedTab: 'First'
  }

  onSelect = selectedTab => {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state
    return (
      <div>
        <Tabs
          onSelect={this.onSelect}
          options={Object.keys(tabs)}
          defaultSelectedIndex='First'
        />
        <h4>{tabs[selectedTab]}</h4>
      </div>
    )
  }
}

storiesOf('Tabs', module)
  .add('Normal', () => (
    <div>
      <ColorModeComparison>
        <div>Options with no selected index by the default</div>
        <Tabs
          options={['Current trends', 'Previous', 'Older']}
          onSelect={action('Selected')}
        />
        <div>Options with selected index by the default</div>
        <Tabs
          options={['Current trends', 'Previous', 'Older']}
          defaultSelectedIndex='Older'
          onSelect={action('Selected')}
        />
        <div>Specified disabled options with no selected by the default</div>
        <Tabs
          options={['1w', '1m', '3m', '6m', 'all']}
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Selected disabled option</div>
        <Tabs
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          disabledIndexes={['1m', '3m']}
          onSelect={action('Selected')}
        />
        <div>Select wrapper rendered as "Button" element via "as" prop.</div>
        <Tabs
          options={['1w', '1m', '3m', '6m', 'all']}
          defaultSelectedIndex='1m'
          as={props => <Button variant='ghost' {...props} />}
          onSelect={action('Selected')}
        />
      </ColorModeComparison>
    </div>
  ))

  .add('Usage example', () => <Example />)
