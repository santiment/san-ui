import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Panel from '../../Panel/Panel'
import Search from '../Search'
import SuggestionItems from './SuggestionItems'
import styles from './SearchWithSuggestions.module.scss'

let debounceTimer
const debounce = (clb, time) => clbArgs => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => clb(clbArgs), time)
}

export const isGroups = data => !Array.isArray(data)

export const getLengthOfSuggestions = (data, maxSuggestions) => {
  if (isGroups(data)) {
    return Object.values(data).reduce((counter, { options }) => {
      const maxOptionsLength = maxSuggestions
        ? Math.min(maxSuggestions, options.length)
        : options.length
      return counter + maxOptionsLength
    }, 0)
  } else {
    return maxSuggestions ? Math.min(maxSuggestions, data.length) : data.length
  }
}

export const getSuggestionByCursor = (data, cursor) => {
  if (isGroups(data)) {
    let counter = 0

    for (const key in data) {
      const { options } = data[key]

      for (let index = 0; index < options.length; index++, counter++) {
        if (counter === cursor) {
          return [key, options[index]]
        }
      }
    }
  } else {
    return data[cursor]
  }
}

class SearchWithSuggestions extends PureComponent {
  static propTypes = {
    data: PropTypes.any.isRequired,
    suggestionContent: PropTypes.func.isRequired,
    predicate: PropTypes.func.isRequired,
    sorter: PropTypes.func,
    onSuggestionSelect: PropTypes.func,
    onSuggestionsUpdate: PropTypes.func,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    debounceTime: PropTypes.number,
    inputProps: PropTypes.object,
    suggestionsProps: PropTypes.object,
    dontResetStateAfterSelection: PropTypes.bool,
    className: PropTypes.string,
    classes: PropTypes.object,
    maxSuggestions: PropTypes.number,
    onViewAllResults: PropTypes.func,
    openOnFocus: PropTypes.bool
  }

  static defaultProps = {
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
    className: '',
    classes: {},
    openOnFocus: false
  }

  static getDerivedStateFromProps ({ value, data }, state) {
    const { lastValue } = state
    if (lastValue !== value) {
      return {
        searchTerm: value,
        lastValue: value
      }
    }

    return null
  }

  state = {
    suggestions: isGroups(this.props.data) ? this.props.data : [],
    searchTerm: this.props.defaultValue,
    lastValue: this.props.value,
    isFocused: false,
    cursor: 0,
    isSearching: false,
    onViewAllResults: this.props.onViewAllResults
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
            cursor: 0
          },
      () => onSuggestionSelect(suggestion)
    )
  }

  filter (options, searchTerm, groupKey) {
    const { predicate, sorter } = this.props

    const filtered = searchTerm
      ? options.filter(predicate(searchTerm))
      : options

    return filtered
      .sort(sorter)
      .map(item =>
        !item.groupKey && typeof item === 'object'
          ? { ...item, groupKey }
          : item
      )
  }

  getFilteredSuggestions (searchTerm) {
    const { data } = this.props

    if (isGroups(data)) {
      const newData = {}
      for (const key in data) {
        const value = data[key]
        newData[key] = {
          label: value.label,
          options: this.filter(value.options, searchTerm, key)
        }
      }

      return newData
    } else {
      return this.filter(data, searchTerm)
    }
  }

  filterData = debounce(() => {
    const { onSuggestionsUpdate } = this.props
    this.setState(
      prevState => ({
        ...prevState,
        suggestions: this.getFilteredSuggestions(prevState.searchTerm),
        cursor: 0,
        isSearching: false
      }),
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
    const { maxSuggestions } = this.props
    const { key, currentTarget } = evt
    let newCursor = cursor

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
        const selectedSuggestion = getSuggestionByCursor(suggestions, cursor)
        currentTarget.blur()
        return selectedSuggestion && this.onSuggestionSelect(selectedSuggestion)
      default:
        return
    }

    const maxCursor = getLengthOfSuggestions(suggestions, maxSuggestions)
    newCursor = newCursor % maxCursor
    this.setState({ cursor: newCursor < 0 ? maxCursor - 1 : newCursor })
  }

  render () {
    const {
      suggestions,
      searchTerm,
      isFocused,
      isSearching,
      cursor,
      onViewAllResults
    } = this.state
    const {
      suggestionContent,
      iconPosition,
      inputProps = {},
      suggestionsProps = {},
      className,
      classes = {},
      maxSuggestions,
      openOnFocus
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
        {isFocused && (openOnFocus || searchTerm !== '') && (
          <Panel
            variant='modal'
            className={cx(
              styles.suggestions,
              isGroups(suggestions) && styles.groupSuggestions,
              classes.suggestionPanel
            )}
            {...suggestionsProps}
          >
            <SuggestionItems
              searchTerm={searchTerm}
              onViewAllResults={onViewAllResults}
              suggestions={suggestions}
              cursor={cursor}
              onSuggestionSelect={this.onSuggestionSelect}
              suggestionContent={suggestionContent}
              isSearching={isSearching}
              maxSuggestions={maxSuggestions}
            />
          </Panel>
        )}
      </div>
    )
  }
}

export default SearchWithSuggestions
