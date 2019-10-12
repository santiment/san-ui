import React, { Fragment } from 'react'
import cx from 'classnames'
import { SUGGESTION_MORE } from './SearchWithSuggestions'
import Button from '../../Button'
import styles from './SearchWithSuggestions.module.scss'

const Suggestion = ({ isActive, className, ...props }) => (
  <Button
    fluid
    variant='ghost'
    className={cx(styles.suggestion, className, isActive && styles.cursored)}
    {...props}
  />
)

const Suggestions = ({
  searchTerm,
  isSearching,
  suggestedCategories,
  cursorItem
}) => {
  return suggestedCategories.length > 0 ? (
    <>
      <Suggestion
        isActive={SUGGESTION_MORE === cursorItem}
        onMouseDown={() => this.onSuggestionSelect(SUGGESTION_MORE)}
        className={styles.more}
      >
        View all results for "{searchTerm}"
      </Suggestion>
      {suggestedCategories.map(({ title, items, suggestionContent }) => (
        <Fragment key={title}>
          <h3 className={styles.title}>{title}</h3>
          {items.map((suggestion, index) => (
            <Suggestion
              key={title + index}
              isActive={suggestion === cursorItem}
              onMouseDown={() => this.onSuggestionSelect(suggestion)}
            >
              {suggestionContent(suggestion)}
            </Suggestion>
          ))}
        </Fragment>
      ))}
    </>
  ) : (
    <div className={styles.suggestion + ' ' + styles.noresults}>
      {!isSearching ? 'No results found' : 'Searching...'}
    </div>
  )
}

export default Suggestions
