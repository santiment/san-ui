import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SearchWithSuggestions from './SearchWithSuggestions'

describe('SearchWithSuggestions', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchWithSuggestions
        data={[
          'Bibox Token',
          'Bigbom',
          'Binance Coin',
          'BioCoin',
          'BitBay',
          'bitcoin'
        ]}
        onSuggestionSelect={() => console.log('check')}
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
        maxSuggestions={5}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render Bigbom as a child', () => {
    const output = mount(
      <SearchWithSuggestions
        data={[
          'Bibox Token',
          'Bigbom',
          'Binance Coin',
          'BioCoin',
          'BitBay',
          'bitcoin'
        ]}
        onSuggestionSelect={() => console.log('check')}
        suggestionContent={suggestion => suggestion}
        predicate={searchTerm => item =>
          item.toUpperCase().includes(searchTerm.toUpperCase())}
        maxSuggestions={5}
      />
    )
    const searchInput = output.find('Input')
    searchInput.children().instance().value = 'Big'
    searchInput.children().simulate('change')
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
