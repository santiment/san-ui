import React from 'react'
import cx from 'classnames'
import styles from './SearchWithSuggestions.module.scss'

const ViewAllResults = ({ searchTerm, onViewAllResults, suggestions }) => {
  if (!searchTerm || !onViewAllResults) {
    return null
  }

  return (
    <>
      <div
        className={cx(styles.divider, styles.viewAllResults)}
        onMouseDown={() => {
          onViewAllResults(searchTerm, suggestions)
        }}
      >
        View all results for “{searchTerm}”
      </div>
    </>
  )
}

export default ViewAllResults
