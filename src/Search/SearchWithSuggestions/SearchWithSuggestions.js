import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Panel from '../../Panel/Panel'
import Search from '../Search'
import styles from './SearchWithSuggestions.module.scss'

class SearchWithSuggestions extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    suggestionContent: PropTypes.func.isRequired,
    onResultSelect: PropTypes.func.isRequired,
    predicate: PropTypes.func.isRequired,
    maxSuggestions: PropTypes.number,
    iconPosition: PropTypes.oneOf(['left', 'right', 'none'])
  }

  static defaultProps = {
    maxSuggestions: 5,
    iconPosition: 'left'
  }

  state = {
    suggestions: [],
    searchTerm: '',
    isFocused: false
  }

  handleInputChange = ({ currentTarget }) => {
    this.setState(
      prevState => ({
        ...prevState,
        searchTerm: currentTarget.value
      }),
      this.filterData
    )
  }

  handleOnResultSelect = suggestion => {
    this.setState({searchTerm: ''}, () => 
      this.props.onResultSelect(suggestion)
    )
  }

  filterData () {
    const { data, predicate } = this.props
    this.setState(prevState => ({
      ...prevState,
      suggestions: data.filter(predicate(prevState.searchTerm))
    }))
  }

  toggleFocusState = () => {
    this.setState(prevState => ({
      ...prevState,
      isFocused: !prevState.isFocused
    }))
  }

  render () {
    const { suggestions, searchTerm, isFocused } = this.state
    const { maxSuggestions, suggestionContent } = this.props
    return (
      <div className={styles.wrapper}>
        <Search
          iconPosition={this.props.iconPosition}
          value={searchTerm}
          onFocus={this.toggleFocusState}
          onBlur={this.toggleFocusState}
          onChange={this.handleInputChange}
        />
        {searchTerm !== '' && (
          <Panel popup className={styles.suggestions}>
            <ul className={styles.suggestions__list}>
              {suggestions.length !== 0 ? (
                suggestions.slice(0, maxSuggestions).map((suggestion, index) => (
                  <li 
                    key={index}
                    className={styles.suggestions__item}>
                    <div 
                      onClick={this.handleOnResultSelect.bind(this, suggestion)}
                      className={styles.suggestion}>
                      {suggestionContent(suggestion)}
                    </div>
                  </li>
                ))
              ) : (
                <div className={styles.suggestion + ' ' + styles.noresults}>
                  No results found.
                </div>
              )}
            </ul>
          </Panel>
        )}
      </div>
    )
  }
}

export default SearchWithSuggestions
