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
    onSuggestionsUpdate: () => {},
    inputProps: {},
    suggestionsProps: {},
    debounceTime: 200,
    dontResetStateAfterSelection: false,
    className: ''
  }

  state = {
    suggestions: [],
    searchTerm: '',
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

  onSuggestionSelect = suggestion => {
    this.resetForm(() => this.props.onSuggestionSelect(suggestion))
  }

  filterData = debounce(() => {
    const { data, predicate, onSuggestionsUpdate } = this.props
    this.setState(
      prevState => ({
        ...prevState,
        suggestions: data.filter(predicate(prevState.searchTerm)),
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

  resetForm (clb) {
    this.setState(
      this.props.dontResetStateAfterSelection
        ? { isSearching: false }
        : {
            isSearching: false,
            searchTerm: '',
            suggestions: [],
            cursor: 0
          },
      clb
    )
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
            {suggestions.length > 0 ? (
              suggestions.slice(0, maxSuggestions).map((suggestion, index) => (
                <Button
                  key={index}
                  fluid
                  variant='ghost'
                  className={cx(
                    styles.suggestion,
                    index === this.state.cursor && styles.cursored
                  )}
                  onMouseDown={() => this.onSuggestionSelect(suggestion)}
                >
                  {suggestionContent(suggestion)}
                </Button>
              ))
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
