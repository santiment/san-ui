import React from 'react'
import styles from './NoResults.module.scss'
import commonStyles from './SuggestionItem.module.scss'

const NoResults = ({ isSearching }) => (
  <div className={commonStyles.suggestion + ' ' + styles.noresults}>
    {!isSearching ? 'No results found' : 'Searching...'}
  </div>
)

export default NoResults
