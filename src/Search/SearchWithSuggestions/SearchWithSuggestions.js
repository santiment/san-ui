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
    data: PropTypes.any.isRequired,
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
    isSearching: false
  }

  isGroups (data) {
    return !Array.isArray(data)
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

  filter (options, searchTerm) {
    const { predicate, sorter } = this.props
    return options.filter(predicate(searchTerm)).sort(sorter)
  }

  getFilteredSuggestions (searchTerm) {
    const { data } = this.props

    if (this.isGroups(data)) {
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
        debugger
        selectedSuggestion = suggestions[cursor]
        currentTarget.blur()
        return selectedSuggestion && this.onSuggestionSelect(selectedSuggestion)
      default:
        return
    }

    const { maxSuggestions } = this.props
    const maxCursor =
      suggestions.length > maxSuggestions ? maxSuggestions : suggestions.length

    newCursor = newCursor % maxCursor

    this.setState({ cursor: newCursor < 0 ? maxCursor - 1 : newCursor })
  }

  render () {
    const { suggestions, searchTerm, isFocused, isSearching } = this.state
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
        {isFocused && searchTerm !== '' && (
          <Panel
            variant='modal'
            className={styles.suggestions}
            {...suggestionsProps}
          >
            <SuggestionItems
              suggestions={suggestions}
              cursor={this.state.cursor}
              onSuggestionSelect={this.onSuggestionSelect}
              suggestionContent={suggestionContent}
              maxSuggestions={maxSuggestions}
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
  isSearching,
  maxSuggestions
}) => {
  console.log(suggestions)

  return suggestions.length > 0 ? (
    suggestions.slice(0, maxSuggestions).map((suggestion, index) => {
      return (
        <Button
          key={index}
          fluid
          variant='ghost'
          className={cx(styles.suggestion, index === cursor && styles.cursored)}
          onMouseDown={() => onSuggestionSelect(suggestion)}
        >
          {suggestionContent(suggestion)}
        </Button>
      )
    })
  ) : (
    <div className={styles.suggestion + ' ' + styles.noresults}>
      {!isSearching ? 'No results found' : 'Searching...'}
    </div>
  )
}

export default SearchWithSuggestions
