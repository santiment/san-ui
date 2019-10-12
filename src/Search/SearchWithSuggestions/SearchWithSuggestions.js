import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Panel from '../../Panel/Panel'
import Search from '../Search'
import Button from '../../Button'
import styles from './SearchWithSuggestions.module.scss'

let debounceTimer
const debounce = (clb, time) => clbArgs => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => clb(clbArgs), time)
}

class SearchWithSuggestions extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    suggestionContent: PropTypes.func.isRequired,
    predicate: PropTypes.func.isRequired,
    sorter: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    onSuggestionsUpdate: PropTypes.func,
    maxSuggestions: PropTypes.number,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    debounceTime: PropTypes.number,
    inputProps: PropTypes.object,
    suggestionsProps: PropTypes.object,
    dontResetStateAfterSelection: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    maxSuggestions: 5,
    iconPosition: undefined,
    onSuggestionSelect: () => {},
    sorter: () => {},
    onSuggestionsUpdate: () => {},
    inputProps: {},
    suggestionsProps: {},
    debounceTime: 200,
    dontResetStateAfterSelection: false,
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
    cursorItem: 'more',
    isSearching: false
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
      predicate,
      sorter,
      onSuggestionsUpdate,
      maxSuggestions
    } = this.props

    this.setState(
      prevState => {
        const suggestedCategories = data
          .map(({ items, ...rest }) => {
            return {
              ...rest,
              items: items.filter(predicate(prevState.searchTerm)).sort(sorter)
            }
          })
          .filter(({ items }) => items.length)

        const suggestions = suggestedCategories.reduce(
          (acc, { items }) => acc.concat(items.slice(0, maxSuggestions)),
          ['more']
        )

        return {
          ...prevState,
          suggestedCategories,
          suggestions,
          cursor: 0,
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
    const { suggestions, cursor } = this.state
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
      maxSuggestions,
      suggestionContent,
      iconPosition,
      inputProps = {},
      suggestionsProps = {},
      className
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
        {(true || isFocused) && searchTerm !== '' && (
          <Panel
            variant='modal'
            className={styles.suggestions}
            {...suggestionsProps}
          >
            {suggestedCategories.length > 0 ? (
              <>
                <Button
                  fluid
                  variant='ghost'
                  className={cx(
                    styles.suggestion,
                    'more' === cursorItem && styles.cursored
                  )}
                  onMouseDown={() => this.onSuggestionSelect('more')}
                >
                  View all results for "{searchTerm}"
                </Button>
                {suggestedCategories.map(({ title, items }) => (
                  <>
                    <h3 key={title} className={styles.title}>
                      {title}
                    </h3>
                    {items.slice(0, maxSuggestions).map((suggestion, index) => (
                      <Button
                        key={title + index}
                        fluid
                        variant='ghost'
                        className={cx(
                          styles.suggestion,
                          suggestion === cursorItem && styles.cursored
                        )}
                        onMouseDown={() => this.onSuggestionSelect(suggestion)}
                      >
                        {suggestionContent(suggestion)}
                      </Button>
                    ))}
                  </>
                ))}
              </>
            ) : (
              <div className={styles.suggestion + ' ' + styles.noresults}>
                {!isSearching ? 'No results found' : 'Searching...'}
              </div>
            )}
          </Panel>
        )}
      </div>
    )
  }
}

export default SearchWithSuggestions
