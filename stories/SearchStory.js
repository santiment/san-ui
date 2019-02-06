import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Search from '../src/Search/Search'
import SearchWithSuggestions from '../src/Search/SearchWithSuggestions/SearchWithSuggestions'
import ColorModeComparison from './ColorModeComparison'

const stories = storiesOf('Search', module)

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
