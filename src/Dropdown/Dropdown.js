import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import Button from '../Button'
import styles from './Dropdown.module.scss'

export const DropdownItem = ({
  className,
  option,
  onSelect,
  isActive,
  ...props
}) => (
  <Button
    variant='ghost'
    className={cx(styles.option, className)}
    onMouseDown={() => onSelect(option)}
    fluid
    isActive={isActive}
    {...props}
  />
)

const Dropdown = ({
  options,
  selected,
  onSelect,
  classes = {},
  children,
  ...props
}) => {
  const [isFocused, setFocus] = useState()

  function onFocus () {
    setFocus(true)
  }

  function onBlur () {
    setFocus(false)
  }

  return (
    <div
      className={cx(styles.wrapper, classes.wrapper)}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex='1'
      {...props}
    >
      {selected.content || selected}
      <Icon type='arrow-down' className={styles.icon} />
      {isFocused && (
        <div
          className={cx(
            styles.options,
            children && styles.options_custom,
            classes.options
          )}
        >
          {children ||
            options.map(option => {
              const { index = option } = option
              const { content = option } = option
              return (
                <DropdownItem
                  key={index}
                  isActive={selected === option}
                  option={option}
                  onSelect={onSelect}
                  className={classes.option}
                >
                  {content}
                </DropdownItem>
              )
            })}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any),
  selected: PropTypes.any,
  onSelect: PropTypes.func,
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    options: PropTypes.string,
    option: PropTypes.string
  })
}

export default Dropdown
