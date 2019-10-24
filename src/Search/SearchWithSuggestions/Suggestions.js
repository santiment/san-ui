import React, { Fragment, useRef, useLayoutEffect } from 'react'
import cx from 'classnames'
import { MORE, SUGGESTION_MORE_ITEM } from './SearchWithSuggestions'
import Button from '../../Button'
import styles from './SearchWithSuggestions.module.scss'

const Suggestion = ({ isActive, className, ...props }) => {
  const btnRef = useRef()

  useLayoutEffect(() => {
    if (isActive && btnRef.current) {
      btnRef.current.scrollIntoView({ block: 'center' })
    }
  }, [isActive])

  return (
    <Button
      forwardedRef={btnRef}
      fluid
      variant='ghost'
      className={cx(styles.suggestion, className, isActive && styles.cursored)}
      {...props}
    />
  )
}

const Category = ({
  title,
  id = title,
  items,
  suggestionContent,
  cursorItem,
  onSuggestionSelect,
  classes = {}
}) => (
  <>
    {title && <h3 className={cx(styles.title, classes.title)}>{title}</h3>}
    {items.map((suggestion, index) => (
      <Suggestion
        key={index}
        isActive={suggestion === cursorItem}
        onClick={() => onSuggestionSelect({ category: id, item: suggestion })}
        className={classes.suggestion}
      >
        {suggestionContent(suggestion)}
      </Suggestion>
    ))}
  </>
)

const Suggestions = ({
  searchTerm,
  isSearching,
  suggestedCategories,
  cursorItem,
  withMoreSuggestions,
  onSuggestionSelect
}) => {
  return suggestedCategories.length > 0 ? (
    <>
      {searchTerm && withMoreSuggestions && (
        <Suggestion
          isActive={SUGGESTION_MORE_ITEM === cursorItem}
          onClick={() => onSuggestionSelect(MORE)}
        >
          View all results for "{searchTerm}"
        </Suggestion>
      )}
      {suggestedCategories.map((category, index) => (
        <Category
          key={category.title + index}
          {...category}
          cursorItem={cursorItem}
          onSuggestionSelect={onSuggestionSelect}
        />
      ))}
    </>
  ) : (
    <div className={styles.suggestion + ' ' + styles.noresults}>
      {!isSearching ? 'No results found' : 'Searching...'}
    </div>
  )
}

export default Suggestions
