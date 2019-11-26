import React, { useState } from 'react'
import cx from 'classnames'
import Icon from '../Icon'
import { InputWithIcon } from '../Input'
import styles from './Search.module.scss'

const Search = ({
  children,
  className,
  onChange,
  defaultValue = '',
  icon,
  ...props
}) => {
  const [input, setInput] = useState(defaultValue)

  function onInputChange (evt) {
    const { value } = evt.currentTarget
    setInput(value)
    onChange(value, evt)
  }

  function onClearClick () {
    setInput('')
    onChange('')
  }

  return (
    <InputWithIcon
      icon={icon}
      inputClassName={styles.input}
      iconClassName={styles.icon}
      placeholder='Type to search...'
      iconPosition='left'
      className={cx(styles.wrapper, className)}
      value={input}
      onChange={onInputChange}
      {...props}
    >
      {input && (
        <Icon
          type='close-medium'
          className={styles.clear}
          onClick={onClearClick}
        />
      )}
      {children}
    </InputWithIcon>
  )
}

Search.defaultProps = {
  onChange: () => {},
  icon: 'search-small'
}

export default Search
