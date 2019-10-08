import React, { Fragment, PureComponent } from 'react'
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

const isGroups = data => {
  return !Array.isArray(data)
}

const getLengthOfSuggestions = data => {
  if (isGroups(data)) {
    let length = 0
    for (const key in data) {
      const { options } = data[key]
      length += options.length
    }

    return length
  } else {
    return data.length
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
    className: PropTypes.string
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

  onSuggestionSelect = (suggestion, key) => {
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
      () => onSuggestionSelect(suggestion, key)
    )
  }

  filter (options, searchTerm) {
    const { predicate, sorter } = this.props
    return options.filter(predicate(searchTerm)).sort(sorter)
  }

  getFilteredSuggestions (searchTerm) {
    const { data } = this.props

    if (isGroups(data)) {
      const newData = {}
      for (const key in data) {
        const value = data[key]
        newData[key] = {
          label: value.label,
          options: this.filter(value.options, searchTerm)
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
        // debugger
        selectedSuggestion = suggestions[cursor]
        currentTarget.blur()
        return selectedSuggestion && this.onSuggestionSelect(selectedSuggestion)
      default:
        return
    }

    // debugger

    const maxCursor = getLengthOfSuggestions(suggestions)

    newCursor = newCursor % maxCursor

    this.setState({ cursor: newCursor < 0 ? maxCursor - 1 : newCursor })
  }

  render () {
    const {
      suggestions,
      searchTerm,
      isFocused,
      isSearching,
      cursor
    } = this.state
    const {
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
        {isFocused && searchTerm !== '' && (
          <Panel
            variant='modal'
            className={cx(
              styles.suggestions,
              isGroups(suggestions) && styles.groupSuggestions
            )}
            {...suggestionsProps}
          >
            <SuggestionItems
              suggestions={suggestions}
              cursor={cursor}
              onSuggestionSelect={this.onSuggestionSelect}
              suggestionContent={suggestionContent}
              isSearching={isSearching}
            />
          </Panel>
        )}
      </div>
    )
  }
}

const SuggestionItems = ({
  suggestions,
  cursor,
  onSuggestionSelect,
  suggestionContent,
  isSearching
}) => {
  let fromCounter = 0

  if (isGroups(suggestions)) {
    return (
      <>
        {Object.keys(suggestions).map((key, index) => {
          const { label, options } = suggestions[key]

          if (!options.length) {
            return null
          }

          fromCounter += options.length

          return (
            <Fragment key={key}>
              {index !== 0 && <div className={styles.divider} />}
              <div className={styles.groupLabel}>{label}</div>
              <SuggestionItemsList
                fromCounter={fromCounter - options.length}
                groupKey={key}
                suggestions={options}
                cursor={cursor}
                onSuggestionSelect={onSuggestionSelect}
                suggestionContent={suggestionContent}
              />
            </Fragment>
          )
        })}
      </>
    )
  } else {
    return suggestions.length > 0 ? (
      <SuggestionItemsList
        suggestions={suggestions}
        cursor={cursor}
        onSuggestionSelect={onSuggestionSelect}
        suggestionContent={suggestionContent}
      />
    ) : (
      <div className={styles.suggestion + ' ' + styles.noresults}>
        {!isSearching ? 'No results found' : 'Searching...'}
      </div>
    )
  }
}

const SuggestionItemsList = ({
  groupKey,
  suggestions,
  cursor,
  onSuggestionSelect,
  suggestionContent,
  fromCounter = 0
}) => {
  return suggestions.map((suggestion, index) => {
    const isActive = index + fromCounter === cursor
    return (
      <Button
        key={index}
        fluid
        variant='ghost'
        className={cx(styles.suggestion, isActive && styles.cursored)}
        onMouseDown={() => onSuggestionSelect(suggestion, groupKey)}
      >
        {suggestionContent(suggestion)}
      </Button>
    )
  })
}

export default SearchWithSuggestions
