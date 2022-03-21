import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Suggestions from './Suggestions'
import Panel from '../../Panel'
import Search from '../Search'
import { flatCategories } from './utils'
import styles from './SearchWithSuggestions.module.scss'

export const SUGGESTION_MORE = 'SUGGESTION_MORE'
export const SUGGESTION_MORE_ITEM = 'SUGGESTION_MORE_ITEM'
export const MORE = {
  category: SUGGESTION_MORE,
  item: SUGGESTION_MORE_ITEM
}

let debounceTimer
const debounce = (clb, time) => clbArgs => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => clb(clbArgs), time)
}

class SearchWithSuggestions extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        suggestionContent: PropTypes.func.isRequired,
        predicate: PropTypes.func.isRequired,
        sorter: PropTypes.func,
        maxSuggestions: PropTypes.number
      })
    ).isRequired,
    onSuggestionSelect: PropTypes.func,
    onSuggestionsUpdate: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    maxSuggestions: PropTypes.number,
    debounceTime: PropTypes.number,
    inputProps: PropTypes.object,
    suggestionsProps: PropTypes.object,
    dontResetStateAfterSelection: PropTypes.bool,
    className: PropTypes.string,
    emptySuggestions: PropTypes.array,
    withMoreSuggestions: PropTypes.bool
  }

  static defaultProps = {
    maxSuggestions: 5,
    onSuggestionSelect: () => {},
    onSuggestionsUpdate: () => {},
    inputProps: {},
    suggestionsProps: {},
    debounceTime: 200,
    dontResetStateAfterSelection: false,
    withMoreSuggestions: true,
    header: null,
    value: '',
    defaultValue: '',
    className: ''
  }

  static getDerivedStateFromProps (
    { value, emptySuggestions },
    { searchTerm, suggestedCategories, isSearching }
  ) {
    if (
      !searchTerm &&
      !isSearching &&
      emptySuggestions !== suggestedCategories
    ) {
      const checkedEmptySuggestions = emptySuggestions || []
      return {
        suggestions: flatCategories(checkedEmptySuggestions, []),
        suggestedCategories: checkedEmptySuggestions
      }
    }

    return null
  }

  searchRef = React.createRef()

  state = {
    suggestions: [],
    searchTerm: this.props.defaultValue,
    isFocused: false,
    cursor: 0,
    isSearching: false
  }

  componentWillUnmount () {
    clearTimeout(debounceTimer)
    window.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('click', this.handleClickAway)
  }

  onInputChange = searchTerm => {
    this.setState(
      prevState => ({
        ...prevState,
        searchTerm,
        isSearching: true
      }),
      this.filterData
    )
  }

  onSuggestionSelect = suggestion => {
    const {
      dontResetStateAfterSelection,
      onSuggestionSelect,
      emptySuggestions
    } = this.props

    this.onBlur()
    this.setState(
      dontResetStateAfterSelection
        ? {
            isSearching: false
          }
        : {
            isSearching: false,
            searchTerm: '',
            suggestions: emptySuggestions
              ? flatCategories(emptySuggestions, [])
              : [],
            suggestedCategories: emptySuggestions || [],
            cursor: 0
          },
      () => onSuggestionSelect(suggestion)
    )
  }

  filterData = debounce(() => {
    const {
      data,
      emptySuggestions = [],
      onSuggestionsUpdate,
      withMoreSuggestions,
      maxSuggestions: commonMaxSuggestions
    } = this.props

    this.setState(
      prevState => {
        const suggestedCategories = prevState.searchTerm
          ? data
              .map(
                ({
                  items,
                  predicate,
                  sorter,
                  maxSuggestions = commonMaxSuggestions,
                  ...rest
                }) => {
                  const filteredItems = items.filter(
                    predicate(prevState.searchTerm)
                  )

                  if (sorter) {
                    filteredItems.sort(sorter(prevState.searchTerm))
                  }

                  return {
                    ...rest,
                    items: filteredItems.slice(0, maxSuggestions)
                  }
                }
              )
              .filter(({ items }) => items.length)
          : emptySuggestions

        const suggestions = flatCategories(
          suggestedCategories,
          withMoreSuggestions && prevState.searchTerm ? [MORE] : []
        )

        const cursor = +Boolean(withMoreSuggestions && suggestions.length)

        return {
          ...prevState,
          suggestedCategories,
          suggestions,
          cursor,
          isSearching: false
        }
      },
      () => onSuggestionsUpdate(this.state.suggestions)
    )
  }, this.props.debounceTime)

  handleClickAway = ({ target }) => {
    if (!this.searchRef.current.contains(target)) {
      this.onBlur()
    }
  }

  onFocus = () => {
    document.addEventListener('click', this.handleClickAway)
    window.addEventListener('keydown', this.onKeyDown)
    this.setState({ isFocused: true }, this.props.onFocus)
  }

  onBlur = () => {
    document.removeEventListener('click', this.handleClickAway)
    window.removeEventListener('keydown', this.onKeyDown)
    this.setState({ isFocused: false }, this.props.onBlur)
  }

  onKeyDown = evt => {
    const { suggestions, cursor } = this.state
    const { key } = evt

    let newCursor = cursor
    let selectedSuggestion

    switch (key) {
      case 'ArrowUp':
        evt.preventDefault()
        newCursor = cursor - 1
        break
      case 'ArrowDown':
        evt.preventDefault()
        newCursor = cursor + 1
        break
      case 'Enter':
        evt.target.blur()
        if (this.state.searchTerm.includes(',')) {
          const terms = this.state.searchTerm
            .split(',')
            .map(term => term.trim().toUpperCase())
          const items = this.props.data[0].items
          const foundItems = []
          terms.forEach(term => {
            const item = items.find(item => item.ticker === term)
            if (item) foundItems.push(item)
          })
          const $this = this
          foundItems.forEach(foundItem =>
            $this.onSuggestionSelect({ item: foundItem })
          )
        } else {
          selectedSuggestion = suggestions[cursor]
          selectedSuggestion && this.onSuggestionSelect(selectedSuggestion)
        }
        this.setState({
          suggestions: [],
          searchTerm: undefined,
          isFocused: false,
          cursor: 0,
          isSearching: false
        })
        document.dispatchEvent(new CustomEvent('clearsearchterminput'))
        evt.target.focus()
        return
      default:
        return
    }

    const maxCursor = suggestions.length

    newCursor = newCursor % maxCursor

    const nextCursor = newCursor < 0 ? maxCursor - 1 : newCursor
    this.setState({ cursor: nextCursor })
  }

  render () {
    const {
      suggestedCategories = [],
      searchTerm,
      isFocused,
      isSearching,
      cursor,
      suggestions
    } = this.state
    const {
      inputProps = {},
      suggestionsProps = {},
      className,
      emptySuggestions,
      withMoreSuggestions,
      header
    } = this.props
    const cursorSuggestion = suggestions[cursor]
    return (
      <Search
        className={className}
        onFocus={this.onFocus}
        onChange={this.onInputChange}
        wrapperRef={this.searchRef}
        {...inputProps}
      >
        {isFocused && (emptySuggestions || searchTerm) && (
          <Panel
            variant='modal'
            className={styles.suggestions}
            {...suggestionsProps}
          >
            {header && header}
            <Suggestions
              cursorItem={cursorSuggestion && cursorSuggestion.item}
              suggestedCategories={suggestedCategories}
              isSearching={isSearching}
              searchTerm={searchTerm}
              withMoreSuggestions={withMoreSuggestions}
              onSuggestionSelect={this.onSuggestionSelect}
            />
          </Panel>
        )}
      </Search>
    )
  }
}

export default SearchWithSuggestions
