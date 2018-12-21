import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Search from '../src/Search/Search'
import SearchWithSuggestions from '../src/Search/SearchWithSuggestions/SearchWithSuggestions'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Search', module)
  .add('Simple', () => (
    <div>
      <ColorModeComparison>
        <Search defaultValue={'Left icon'} />
        <Search iconPosition='right' defaultValue={'Right icon'} />
        <Search />
        <Search iconPosition='right' />
      </ColorModeComparison>
    </div>
  ))
  .add('Suggestions', () => (
    <div>
      <ColorModeComparison>
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
          onResultSelect={action('selected')}
          suggestionContent={suggestion => suggestion}
          predicate={searchTerm => item =>
              item.toUpperCase().includes(searchTerm.toUpperCase())}
              maxSuggestions={5}
            />
          </ColorModeComparison>
        </div>
  ))
