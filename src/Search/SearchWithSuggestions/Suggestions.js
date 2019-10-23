import React, { Fragment, useRef, useLayoutEffect } from 'react'
import cx from 'classnames'
import { SUGGESTION_MORE } from './SearchWithSuggestions'
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

const Category = ({ title, items, suggestionContent, cursorItem }) => (
  <>
    {title && <h3 className={styles.title}>{title}</h3>}
    {items.map((suggestion, index) => (
      <Suggestion
        key={index}
        isActive={suggestion === cursorItem}
        onMouseDown={() => this.onSuggestionSelect(suggestion)}
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
  emptySuggestions,
  withMoreSuggestions
}) => {
  if (!searchTerm && emptySuggestions) {
    return emptySuggestions.map((category, index) => (
      <Category
        key={category.title + index}
        {...category}
        cursorItem={cursorItem}
      />
    ))
  }

  return suggestedCategories.length > 0 ? (
    <>
      {withMoreSuggestions && (
        <Suggestion
          isActive={SUGGESTION_MORE === cursorItem}
          onMouseDown={() => this.onSuggestionSelect(SUGGESTION_MORE)}
          className={styles.more}
        >
          View all results for "{searchTerm}"
        </Suggestion>
      )}
      {suggestedCategories.map((category, index) => (
        <Category
          key={category.title + index}
          {...category}
          cursorItem={cursorItem}
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
