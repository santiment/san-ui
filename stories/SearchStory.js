import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Search from '../src/Search/Search'
import SearchWithSuggestions from '../src/Search/SearchWithSuggestions/SearchWithSuggestions'
import ColorModeComparison from './ColorModeComparison'

const stories = storiesOf('Search', module)

const SUGGESTION_GROUPS = {
  assets: {
    label: 'Assets',
    options: ['Bibox Token', 'Bigbom', 'Binance Coin', 'BioCoin']
  },
  words: {
    label: 'Trending words',
    options: [
      'Bibox Token Words',
      'Bigbom Words',
      'Binance Coin Words',
      'BioCoin Words',
      'BitBay Words',
      'bitcoin Words',
      'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj Words',
      'Bibox Token Words',
      'Bigbom Words',
      'Binance Coin Words',
      'BioCoin Words',
      'BitBay Words',
      'bitcoin Words',
      'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj Words',
      'Bibox Token Words',
      'Bigbom Words',
      'Binance Coin Words',
      'BioCoin Words',
      'BitBay Words',
      'bitcoin Words'
    ]
  },
  watchlists: {
    label: 'Watchlists',
    options: [
      'Bibox Token Watchlist',
      'Bigbom Watchlist',
      'Binance Coin Watchlist',
      'BioCoin Watchlist',
      'BitBay Watchlist',
      'bitcoin Watchlist',
      'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj Watchlist'
    ]
  }
}

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
        dontResetStateAfterSelection
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
    />

    <div>Max suggestions 5</div>
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

stories.add('Suggestions by groups', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={SUGGESTION_GROUPS}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      openOnFocus
    />

    <div>Don't reset state after selection with maxSuggestions = 5:</div>
    <SearchWithSuggestions
      data={SUGGESTION_GROUPS}
      onSuggestionSelect={suggestion => {
        action('selected')(suggestion)
      }}
      iconPosition='left'
      suggestionContent={suggestion => suggestion}
      predicate={searchTerm => item =>
        item.toUpperCase().includes(searchTerm.toUpperCase())}
      dontResetStateAfterSelection
      maxSuggestions={5}
      onViewAllResults={console.log}
      openOnFocus
    />
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
    />
  ),
  {
    info: {
      text: `
    **SearchWithSuggestions** component is made for Search with a suggestion popup panel.

    ~~~js
      <SearchWithSuggestions
        iconPosition='none'
        data={}
        onSuggestionSelect={suggestion = console.log(suggestion)}
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
        />
    ~~~
    
    ~~~js
      <SearchWithSuggestions
        iconPosition='none'
        data={{
            assets: {
                label: 'Assets',
                options: ['Bibox Token', 'Bigbom', 'Binance Coin', 'BioCoin']
            },
            
            words: {
                label: 'Words',
                options: ['Bibox Token', 'Bigbom', 'Binance Coin', 'BioCoin']
            },
        }}
        onSuggestionSelect={suggestion = console.log(suggestion)}
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
        />
    ~~~
  `,
      inline: true,
      source: false
    }
  }
)
