import React, { Fragment, PureComponent, useEffect, useRef } from 'react'
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

const getLengthOfSuggestions = (data, maxSuggestions) => {
  if (isGroups(data)) {
    let length = 0
    for (const key in data) {
      const { options } = data[key]

      const maxOptionsLength = maxSuggestions
        ? Math.min(maxSuggestions, options.length)
        : options.length

      length += maxOptionsLength
    }

    return length
  } else {
    return maxSuggestions ? Math.min(maxSuggestions, data.length) : data.length
  }
}

const getSuggestionByCursor = (data, cursor) => {
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
    onViewAllResults: PropTypes.func
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
    classes: {}
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
      cursor
    } = this.state
    const {
      suggestionContent,
      iconPosition,
      inputProps = {},
      suggestionsProps = {},
      className,
      classes = {},
      data,
      maxSuggestions,
      onViewAllResults
    } = this.props

    const isByGroups = isGroups(data)

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
        {isFocused && (isByGroups || searchTerm !== '') && (
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

const SuggestionItems = ({
  suggestions,
  cursor,
  onSuggestionSelect,
  suggestionContent,
  isSearching,
  maxSuggestions,
  onViewAllResults,
  searchTerm
}) => {
  const getSliced = data =>
    maxSuggestions ? data.slice(0, maxSuggestions) : data

  if (isGroups(suggestions)) {
    const noData = getLengthOfSuggestions(suggestions, maxSuggestions) === 0
    const types = Object.keys(suggestions)

    let fromCounter = 0

    return (
      <>
        {!noData && (
          <ViewAllResults
            searchTerm={searchTerm}
            onViewAllResults={onViewAllResults}
            suggestions={suggestions}
          />
        )}
        {!noData &&
          types.map((key, index) => {
            const { label, options } = suggestions[key]

            const formattedOptions = getSliced(options)

            if (!formattedOptions.length) {
              return null
            }

            fromCounter += formattedOptions.length

            return (
              <Fragment key={key}>
                {label && <div className={styles.groupLabel}>{label}</div>}
                <SuggestionItemsList
                  fromCounter={fromCounter - formattedOptions.length}
                  suggestions={formattedOptions}
                  cursor={cursor}
                  onSuggestionSelect={selected =>
                    onSuggestionSelect([key, selected])
                  }
                  suggestionContent={suggestionContent}
                />
                {index !== types.length - 1 && (
                  <div className={styles.divider} />
                )}
              </Fragment>
            )
          })}
        {noData && <NoResults isSearching={isSearching} />}
      </>
    )
  } else {
    const sliced = getSliced(suggestions)
    return sliced.length > 0 ? (
      <>
        {onViewAllResults && (
          <ViewAllResults
            searchTerm={searchTerm}
            onViewAllResults={onViewAllResults}
            suggestions={suggestions}
          />
        )}
        <SuggestionItemsList
          suggestions={sliced}
          cursor={cursor}
          onSuggestionSelect={onSuggestionSelect}
          suggestionContent={suggestionContent}
        />
      </>
    ) : (
      <NoResults isSearching={isSearching} />
    )
  }
}

const ViewAllResults = ({ searchTerm, onViewAllResults, suggestions }) => {
  if (!searchTerm || !onViewAllResults) {
    return null
  }

  return (
    <>
      <div
        className={styles.viewAllResults}
        onClick={() => onViewAllResults(searchTerm, suggestions)}
      >
        View all results for “{searchTerm}”
      </div>
      <div className={styles.divider} />
    </>
  )
}

const NoResults = ({ isSearching }) => (
  <div className={styles.suggestion + ' ' + styles.noresults}>
    {!isSearching ? 'No results found' : 'Searching...'}
  </div>
)

const SuggestionItemsList = ({
  suggestions,
  cursor,
  onSuggestionSelect,
  suggestionContent,
  fromCounter = 0
}) => {
  return suggestions.map((suggestion, index) => {
    const isActive = index + fromCounter === cursor

    return (
      <SuggestionItem
        key={index}
        isActive={isActive}
        onSuggestionSelect={onSuggestionSelect}
        suggestionContent={suggestionContent}
        suggestion={suggestion}
      />
    )
  })
}

const SuggestionItem = ({
  isActive,
  onSuggestionSelect,
  suggestionContent,
  suggestion
}) => {
  const myRef = useRef(null)

  useEffect(() => {
    isActive && myRef && myRef.current && myRef.current.scrollIntoView(false)
  }, [isActive, myRef])

  return (
    <Button
      fluid
      forwardedRef={isActive ? myRef : undefined}
      variant='ghost'
      className={cx(styles.suggestion, isActive && styles.cursored)}
      onMouseDown={() => onSuggestionSelect(suggestion)}
    >
      {suggestionContent(suggestion)}
    </Button>
  )
}

export default SearchWithSuggestions
