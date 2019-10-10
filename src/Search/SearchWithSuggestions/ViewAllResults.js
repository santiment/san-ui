import React from 'react'
import styles from './SearchWithSuggestions.module.scss'

const ViewAllResults = ({ searchTerm, onViewAllResults, suggestions }) => {
  if (!searchTerm || !onViewAllResults) {
    return null
  }

  return (
    <>
      <div
        className={styles.viewAllResults}
        onMouseDown={() => {
          onViewAllResults(searchTerm, suggestions)
        }}
      >
        View all results for “{searchTerm}”
      </div>
      <div className={styles.divider} />
    </>
  )
}

export default ViewAllResults
