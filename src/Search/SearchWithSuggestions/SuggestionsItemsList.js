import React from 'react'
import SuggestionItem from './SuggestionItem'

export const SuggestionItemsList = ({
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

export default SuggestionItemsList
