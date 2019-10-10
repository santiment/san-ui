import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import Button from '../../Button'
import styles from './SuggestionItem.module.scss'

const SuggestionItem = ({
  isActive,
  onSuggestionSelect,
  suggestionContent,
  suggestion
}) => {
  const myRef = useRef(null)

  useEffect(() => {
    isActive && myRef && myRef.current && myRef.current.scrollIntoView(false)
  }, [isActive, myRef])

  return (
    <Button
      fluid
      forwardedRef={isActive ? myRef : undefined}
      variant='ghost'
      className={cx(styles.suggestion, isActive && styles.cursored)}
      onMouseDown={() => onSuggestionSelect(suggestion)}
    >
      {suggestionContent(suggestion)}
    </Button>
  )
}

export default SuggestionItem
