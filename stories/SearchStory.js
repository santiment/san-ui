import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Search from '../src/Search/Search'
import SearchWithSuggestions from '../src/Search/SearchWithSuggestions/SearchWithSuggestions'
import ColorModeComparison from './ColorModeComparison'

const stories = storiesOf('Search', module)

class Test extends React.PureComponent {
  state = {
    value: 'Bibox Token'
  }

  render () {
    return (
      <SearchWithSuggestions
        data={[
          'Bibox Token',
          'Bigbom',
          'Binance Coin',
          'BioCoin',
          'BitBay',
          'bitcoin',
          'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
        ]}
        onSuggestionSelect={suggestion => {
          this.setState({ value: suggestion })
          action('selected')(suggestion)
        }}
        iconPosition='left'
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
        maxSuggestions={5}
        dontResetStateAfterSelection
        value={'000=' + this.state.value}
      />
    )
  }
}

stories.add('Simple', () => (
  <ColorModeComparison>
    <Search defaultValue='No icon' />
    <Search iconPosition='left' defaultValue='Left icon' />
    <Search iconPosition='right' defaultValue='Right icon' />
    <Search />
    <Search iconPosition='left' />
    <Search iconPosition='right' />
  </ColorModeComparison>
))

stories.add('Suggestions', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        'Bibox Token',
        'Bigbom',
        'Binance Coin',
        'BioCoin',
        'BitBay',
        'bitcoin',
        'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      maxSuggestions={5}
    />
  </ColorModeComparison>
))

stories.add('Suggestions (Keep state after suggestion)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        'Bibox Token',
        'Bigbom',
        'Binance Coin',
        'BioCoin',
        'BitBay',
        'bitcoin',
        'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      maxSuggestions={5}
      dontResetStateAfterSelection
    />
    <br />
    <div>Setting input value after suggestion selection</div>
    <SearchWithSuggestions
      data={[
        'Bibox Token',
        'Bigbom',
        'Binance Coin',
        'BioCoin',
        'BitBay',
        'bitcoin',
        'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      maxSuggestions={5}
      dontResetStateAfterSelection
    />
  </ColorModeComparison>
))

stories.add('Suggestions (Sorting by length)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        'Bibox Token',
        'Bigbom',
        'Binance Coin',
        'BioCoin',
        'BitBay',
        'bitcoin',
        'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      maxSuggestions={5}
      dontResetStateAfterSelection
      sorter={(itemA, itemB) => itemA.length - itemB.length}
    />
  </ColorModeComparison>
))

stories.add('Suggestions derived value', () => (
  <ColorModeComparison>
    <Test />
  </ColorModeComparison>
))

stories.add(
  'Suggestions (usage info)',
  () => (
    <SearchWithSuggestions
      data={[
        'Bibox Token',
        'Bigbom',
        'Binance Coin',
        'BioCoin',
        'BitBay',
        'bitcoin'
      ]}
      onSuggestionSelect={action('selected')}
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      maxSuggestions={5}
    />
  ),
  {
    info: {
      text: `
    **SearchWithSuggestions** component is made for Search with a suggestion popup panel.

    ~~~js
      <SearchWithSuggestions
        iconPosition='none'
        data={[
          'Bibox Token',
          'Bigbom',
          'Binance Coin',
          'BioCoin',
          'BitBay',
          'bitcoin'
        ]}
        onSuggestionSelect={suggestion = console.log(suggestion)}
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
          maxSuggestions={5}
        />
    ~~~
  `,
      inline: true,
      source: false
    }
  }
)
