import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import SearchWithSuggestions from './SearchWithSuggestions'

const assets = [
  'Bibox Token',
  'Bigbom',
  'Binance Coin',
  'BioCoin',
  'BitBay',
  'bitcoin'
]

const simplePredicate = searchTerm => item =>
  item.toUpperCase().includes(searchTerm.toUpperCase())

const data = [
  {
    title: 'Assets',
    items: assets,
    predicate: simplePredicate,
    suggestionContent: suggestion => suggestion
  }
]

describe('SearchWithSuggestions', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchWithSuggestions
        data={data}
        onSuggestionSelect={() => console.log('check')}
        maxSuggestions={5}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render Bigbom as a child', () => {
    const output = mount(
      <SearchWithSuggestions
        data={data}
        onSuggestionSelect={() => console.log('check')}
        maxSuggestions={5}
      />
    )
    const searchInput = output.find('Input')
    searchInput.children().instance().value = 'Big'
    searchInput.children().simulate('change')
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
