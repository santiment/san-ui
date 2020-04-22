import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from './Input'
import Button from '../Button'
import Icon from '../Icon'
import styles from './MultiInput.module.scss'

const VALUE_ADD_KEYS = ['Tab', 'Enter']
const VALUE_REMOVE_KEYS = ['Delete', 'Backspace']

const MultiInput = ({
  className,
  inputClassName,
  children,
  defaultValue = '',
  placeholder = '',
  wrapperRef,
  onChange,
  forwardedRef,
  maxValues,
  values: defaultValues,
  ...props
}) => {
  const [input, setInput] = useState(defaultValue)
  const [values, setValues] = useState(defaultValues)

  const inputRef = forwardedRef !== undefined ? forwardedRef : useRef(null)

  function setFocus () {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  function onInputChange (evt) {
    const { value } = evt.currentTarget
    setInput(value)
    onChange(value, evt)
  }

  function onValueAdd (value) {
    if (!value) {
      return
    }
    setInput('')
    onChange('')

    const valuesSet = new Set(values)
    valuesSet.add(value)

    setValues([...valuesSet])
  }

  function onValueRemove (value) {
    setValues(values.filter(item => item !== value))
  }

  function onKeyDown (evt) {
    if (VALUE_ADD_KEYS.includes(evt.key)) {
      evt.preventDefault()
      onValueAdd(evt.currentTarget.value)
    }

    if (VALUE_REMOVE_KEYS.includes(evt.key) && !input) {
      evt.preventDefault()
      onValueRemove(values[values.length - 1])
    }
  }

  const shouldShowInput = maxValues ? values.length < maxValues : true

  return (
    <div
      className={cx(className, styles.wrapper)}
      ref={wrapperRef}
      onClick={setFocus}
    >
      <div className={styles.values}>
        {values.map((item, idx) => (
          <Button
            border
            className={styles.value}
            key={idx}
            onClick={evt => {
              evt.stopPropagation()
              onValueRemove(item)
            }}
          >
            {item}
            <Icon type='close-small' className={styles.delete} />
          </Button>
        ))}
        {shouldShowInput && (
          <Input
            size={values.length === 0 ? placeholder.length : input.length + 1}
            placeholder={values.length > 0 ? '' : placeholder}
            className={cx(inputClassName, styles.input)}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            value={input}
            forwardedRef={inputRef}
            {...props}
          />
        )}
      </div>
      {children}
    </div>
  )
}

MultiInput.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string
}

MultiInput.defaultProps = {
  className: '',
  onChange: () => {},
  values: []
}

export default MultiInput
