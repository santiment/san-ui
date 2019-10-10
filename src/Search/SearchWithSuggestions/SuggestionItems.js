import React, { Fragment } from 'react'
import SuggestionItemsList from './SuggestionsItemsList'
import ViewAllResults from './ViewAllResults'
import { getLengthOfSuggestions, isGroups } from './SearchWithSuggestions'
import NoResults from './NoResults'
import commonStyles from './SearchWithSuggestions.module.scss'
import styles from './SuggestionItems.module.scss'

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
        {noData ? (
          <NoResults isSearching={isSearching} />
        ) : (
          <>
            <ViewAllResults
              searchTerm={searchTerm}
              onViewAllResults={onViewAllResults}
              suggestions={suggestions}
            />
            {types.map((key, index) => {
              const { label, options } = suggestions[key]

              const formattedOptions = getSliced(options)

              if (!formattedOptions.length) {
                return null
              }

              fromCounter += formattedOptions.length

              return (
                <div
                  key={key}
                  className={
                    index !== types.length - 1
                      ? commonStyles.divider
                      : undefined
                  }
                >
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
                </div>
              )
            })}
          </>
        )}
      </>
    )
  } else {
    const sliced = getSliced(suggestions)
    return sliced.length > 0 ? (
      <>
        <ViewAllResults
          searchTerm={searchTerm}
          onViewAllResults={onViewAllResults}
          suggestions={suggestions}
        />
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

export default SuggestionItems
