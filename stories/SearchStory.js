import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Search from '../src/Search/Search'
import SearchWithSuggestions from '../src/Search/SearchWithSuggestions/SearchWithSuggestions'
import ColorModeComparison from './ColorModeComparison'

const stories = storiesOf('Search', module)

const assets = [
  'Bibox Token',
  'Bigbom',
  'Binance Coin',
  'BioCoin',
  'BitBay',
  'bitcoin',
  'Very large title asdbgjhasb jkgdsbfkgjsdbfg gdfj'
]

const watchlists = ['Easy money', 'Test portfolio', 'Test 123', 'Money money']

const simplePredicate = searchTerm => item =>
  item.toUpperCase().includes(searchTerm.toUpperCase())

class Test extends React.PureComponent {
  state = {
    value: 'Bibox Token'
  }

  render () {
    return (
      <SearchWithSuggestions
        data={[
          {
            title: 'Assets',
            items: assets,
            predicate: simplePredicate,
            suggestionContent: suggestion => suggestion
          }
        ]}
        onSuggestionSelect={suggestion => {
          this.setState({ value: suggestion })
          action('selected')(suggestion)
        }}
        iconPosition='left'
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
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
    />
  </ColorModeComparison>
))

stories.add('Suggestions (no "more" option) ', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
      withMoreSuggestions={false}
    />
  </ColorModeComparison>
))

stories.add('Suggestions (With suggestions on empty input)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
      onFocus={action('onFocus')}
      onBlur={action('onBlur')}
      emptySuggestions={[
        {
          title: 'Recently searched',
          items: ['bitcoin', 'test recent'],
          suggestionContent: suggestion => suggestion
        }
      ]}
    />
  </ColorModeComparison>
))

stories.add('Suggestions (multiple categories)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        },
        {
          title: 'Watchlists',
          items: watchlists,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
    />
  </ColorModeComparison>
))

stories.add('Suggestions (Keep state after suggestion)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
      dontResetStateAfterSelection
    />
    <br />
    <div>Setting input value after suggestion selection</div>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
      dontResetStateAfterSelection
    />
  </ColorModeComparison>
))

stories.add('Suggestions (Sorting by length)', () => (
  <ColorModeComparison>
    <SearchWithSuggestions
      data={[
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion,
          sorter: (itemA, itemB) => itemA.length - itemB.length
        }
      ]}
      onSuggestionSelect={action('selected')}
      iconPosition='left'
      maxSuggestions={5}
      dontResetStateAfterSelection
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
        {
          title: 'Assets',
          items: assets,
          predicate: simplePredicate,
          suggestionContent: suggestion => suggestion,
          maxSuggestions: 5
        }
      ]}
      onSuggestionSelect={action('selected')}
    />
  ),
  {
    info: {
      text: `
    **SearchWithSuggestions** component is made for Search with a suggestion popup panel.

    ~~~js
      <SearchWithSuggestions
        iconPosition='none'
        data={[{
          title: 'Assets',
          items: [
          'Bibox Token',
          'Bigbom',
          'Binance Coin',
          'BioCoin',
          'BitBay,
          'bitcin'
         ],
         predicate: searchTerm => item => item.toUpperCase().includes(searchTerm.toUpperCase()) ,
         suggestionContent: suggestion => suggestion,
         maxSuggestions: 5
        }]}
        onSuggestionSelect={suggestion = console.log(suggestion)}
        maxSuggestions={5}
      />
    ~~~
  `,
      inline: true,
      source: false
    }
  }
)
