import React from 'react'
import SuggestionItem from './SuggestionItem'
import styles from './SuggestionItemsList.module.scss'

export const SuggestionItemsList = ({
  suggestions,
  cursor,
  onSuggestionSelect,
  suggestionContent,
  fromCounter = 0
}) => {
  return (
    <div className={styles.list}>
      {suggestions.map((suggestion, index) => {
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
      })}
    </div>
  )
}

export default SuggestionItemsList
