import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
    maxSuggestions: PropTypes.number,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    debounceTime: PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    maxSuggestions: 5,
    iconPosition: undefined,
    onSuggestionSelect: () => {},
    debounceTime: 200,
    className: ''
  }

  state = {
    suggestions: [],
    searchTerm: '',
    isFocused: false
  }

  componentWillUnmount() {
    clearTimeout(debounceTimer)
  }

  onInputChange = ({ currentTarget }) => {
    this.setState(
      prevState => ({
        ...prevState,
        searchTerm: currentTarget.value
      }),
      this.filterData
    )
  }

  onSuggestionSelect = suggestion => {
    this.setState({ searchTerm: '' }, () =>
      this.props.onSuggestionSelect(suggestion)
    )
  }

  filterData = debounce(() => {
    const { data, predicate } = this.props
    this.setState(prevState => ({
      ...prevState,
      suggestions: data.filter(predicate(prevState.searchTerm))
    }))
  }, this.props.debounceTime)

  toggleFocusState = () => {
    this.setState(prevState => ({
      ...prevState,
      isFocused: !prevState.isFocused
    }))
  }

  render() {
    const { suggestions, searchTerm, isFocused } = this.state
    const {
      maxSuggestions,
      suggestionContent,
      iconPosition,
      className
    } = this.props
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <Search
          iconPosition={iconPosition}
          value={searchTerm}
          onFocus={this.toggleFocusState}
          onBlur={this.toggleFocusState}
          onChange={this.onInputChange}
        />
        {isFocused && searchTerm !== '' && (
          <Panel variant='modal' className={styles.suggestions}>
            {suggestions.length > 0 ? (
              suggestions.slice(0, maxSuggestions).map((suggestion, index) => (
                <Button
                  key={index}
                  fluid
                  variant='ghost'
                  className={styles.suggestion}
                  onMouseDown={() => this.onSuggestionSelect(suggestion)}
                >
                  {suggestionContent(suggestion)}
                </Button>
              ))
            ) : (
              <div className={styles.suggestion + ' ' + styles.noresults}>
                No results found.
              </div>
            )}
          </Panel>
        )}
      </div>
    )
  }
}

export default SearchWithSuggestions
