import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Suggestions from './Suggestions'
import Panel from '../../Panel'
import Search from '../Search'
import { flatCategories } from './utils'
import styles from './SearchWithSuggestions.module.scss'

export const SUGGESTION_MORE = 'SUGGESTION_MORE'

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
    maxSuggestions: PropTypes.number,
    iconPosition: PropTypes.oneOf(['left', 'right']),
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
    iconPosition: undefined,
    onSuggestionSelect: () => {},
    onSuggestionsUpdate: () => {},
    inputProps: {},
    suggestionsProps: {},
    debounceTime: 200,
    dontResetStateAfterSelection: false,
    withMoreSuggestions: true,
    value: '',
    defaultValue: '',
    className: ''
  }

  static getDerivedStateFromProps ({ value }, { lastValue }) {
    if (lastValue !== value) {
      return {
        searchTerm: value,
        lastValue: value
      }
    }

    return null
  }

  state = {
    suggestions: [],
    searchTerm: this.props.defaultValue,
    lastValue: this.props.value,
    isFocused: false,
    cursor: 0,
    cursorItem: SUGGESTION_MORE,
    isSearching: false
  }

  componentDidMount () {
    const { emptySuggestions, defaultValue } = this.props
    if (emptySuggestions && !defaultValue) {
      const suggestions = flatCategories(emptySuggestions, [])
      this.setState({
        suggestions,
        cursorItem: suggestions[0]
      })
    }
  }

  componentWillUnmount () {
    clearTimeout(debounceTimer)
  }

  onInputChange = ({ currentTarget }) => {
    this.setState(
      prevState => ({
        ...prevState,
        searchTerm: currentTarget.value,
        isSearching: true
      }),
      this.filterData
    )
  }

  onSuggestionSelect = suggestion => {
    const { dontResetStateAfterSelection, onSuggestionSelect } = this.props

    this.setState(
      dontResetStateAfterSelection
        ? {
            isSearching: false
          }
        : {
            isSearching: false,
            searchTerm: '',
            suggestions: [],
            suggestedCategories: [],
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
                  return {
                    ...rest,
                    items: items
                      .filter(predicate(prevState.searchTerm))
                      .sort(sorter)
                      .slice(0, maxSuggestions)
                  }
                }
              )
              .filter(({ items }) => items.length)
          : emptySuggestions

        const suggestions = flatCategories(
          suggestedCategories,
          withMoreSuggestions && prevState.searchTerm ? [SUGGESTION_MORE] : []
        )

        const cursor = +Boolean(withMoreSuggestions && suggestions.length)

        return {
          ...prevState,
          suggestedCategories,
          suggestions,
          cursor,
          cursorItem: suggestions[cursor],
          isSearching: false
        }
      },
      () => onSuggestionsUpdate(this.state.suggestions)
    )
  }, this.props.debounceTime)

  onFocus = () => {
    this.setState({ isFocused: true })
  }

  onBlur = () => {
    this.setState({ isFocused: false })
  }

  onKeyDown = evt => {
    const { suggestions, cursor, searchTerm } = this.state
    const { key, currentTarget } = evt

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
        selectedSuggestion = suggestions[cursor]
        currentTarget.blur()
        return selectedSuggestion && this.onSuggestionSelect(selectedSuggestion)
      default:
        return
    }

    const maxCursor = suggestions.length

    newCursor = newCursor % maxCursor

    const nextCursor = newCursor < 0 ? maxCursor - 1 : newCursor
    this.setState({ cursor: nextCursor, cursorItem: suggestions[nextCursor] })
  }

  render () {
    const {
      suggestedCategories = [],
      searchTerm,
      isFocused,
      isSearching,
      cursor,
      cursorItem
    } = this.state
    const {
      iconPosition,
      inputProps = {},
      suggestionsProps = {},
      className,
      emptySuggestions,
      withMoreSuggestions
    } = this.props
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <Search
          iconPosition={iconPosition}
          value={searchTerm}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onInputChange}
          onKeyDown={this.onKeyDown}
          {...inputProps}
        />
        {isFocused && (emptySuggestions || searchTerm) && (
          <Panel
            variant='modal'
            className={styles.suggestions}
            {...suggestionsProps}
          >
            <Suggestions
              cursorItem={cursorItem}
              suggestedCategories={suggestedCategories}
              isSearching={isSearching}
              searchTerm={searchTerm}
              emptySuggestions={emptySuggestions}
              withMoreSuggestions={withMoreSuggestions}
            />
          </Panel>
        )}
      </div>
    )
  }
}

export default SearchWithSuggestions
