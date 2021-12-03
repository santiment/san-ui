import React, { useState, useRef, useEffect } from 'react'
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
  onInputChange,
  onValueAdd,
  onValueRemove,
  forwardedRef,
  maxValues,
  valueContent,
  defaultValues,
  values: valuesFromProps,
  ...props
}) => {
  const [input, setInput] = useState(defaultValue)
  const [values, setValues] = useState(defaultValues)

  useEffect(() => {
    if (!valuesFromProps) return

    if (valuesFromProps !== values) {
      setValues(valuesFromProps)
    }
  }, [valuesFromProps])

  const inputRef = forwardedRef !== undefined ? forwardedRef : useRef(null)

  function setFocus () {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  function onChange (evt) {
    const { value } = evt.currentTarget
    setInput(value)
    onInputChange(value, evt)
  }

  function addValue (value) {
    if (!value) {
      return
    }
    setInput('')
    onInputChange('')

    const valuesSet = new Set(values)

    if (!values.includes(value)) {
      const newValues = [...values, value]
      onValueAdd(value, newValues)
      setValues(newValues)
    }
  }

  function removeValue (value) {
    const newValues = values.filter(item => item !== value)
    setValues(newValues)
    onValueRemove(value, newValues)
  }

  function onKeyDown (evt) {
    if (VALUE_ADD_KEYS.includes(evt.key)) {
      evt.preventDefault()
      addValue(evt.currentTarget.value)
    }

    if (VALUE_REMOVE_KEYS.includes(evt.key) && !input) {
      evt.preventDefault()
      removeValue(values[values.length - 1])
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
            }}
          >
            {valueContent ? valueContent(item) : item}
            {(!props.hideLastItemClose ||
              (props.hideLastItemClose &&
                idx > 2 &&
                idx < values.length - 1)) && (
              <Icon
                type='close-small'
                className={styles.delete}
                onClick={() => removeValue(item)}
              />
            )}
          </Button>
        ))}
        {shouldShowInput && (
          <Input
            size={values.length === 0 ? placeholder.length : input.length + 1}
            placeholder={values.length > 0 ? '' : placeholder}
            className={cx(inputClassName, styles.input)}
            onChange={onChange}
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
  inputClassName: PropTypes.string,
  valueContent: PropTypes.func,
  onInputChange: PropTypes.func,
  onValueAdd: PropTypes.func,
  onValueRemove: PropTypes.func,
  maxValues: PropTypes.number
}

MultiInput.defaultProps = {
  className: '',
  onInputChange: () => {},
  onValueAdd: () => {},
  onValueRemove: () => {},
  defaultValues: []
}

export default MultiInput
