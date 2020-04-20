import React, { useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from './Input'
import Button from '../Button'
import Icon from '../Icon'
import styles from './MultiInput.module.scss'

function useSizes (values) {
  const targetRef = useRef()
  const [sizes, setSizes] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    if (targetRef.current) {
      const elem = targetRef.current.getBoundingClientRect()
      setSizes({ width: elem.width, height: elem.height })
    }
  }, [targetRef.current, values])

  return { targetRef, width: sizes.width, height: sizes.height }
}

const MultiInput = ({
  className,
  inputClassName,
  children,
  value: defaultValue,
  wrapperRef,
  onChange,
  values: defaultValues,
  ...props
}) => {
  const [input, setInput] = useState(defaultValue)
  const [values, setValues] = useState(defaultValues)

  const { targetRef, width, height } = useSizes(values)
  console.log(targetRef, width, height)

  function onInputChange (evt) {
    const { value } = evt.currentTarget
    setInput(value)
    onChange(value, evt)
  }

  function onEnter () {
    setInput('')
    onChange('')
  }

  function onValueAdd (value) {
    setInput('')
    onChange('')

    const valuesSet = new Set(values)
    valuesSet.add(value)

    setValues([...valuesSet])
  }

  function onValueRemove (value) {
    setValues(values.filter(item => item !== value))
  }

  function onKeyPress (evt) {
    // 13: Enter, 9: Tab
    const charCodes = [13, 9]

    if (charCodes.includes(evt.charCode)) {
      evt.preventDefault()
      onValueAdd(evt.currentTarget.value)
    }
  }

  return (
    <div className={cx(className, styles.wrapper)} ref={wrapperRef}>
      <Input
        className={cx(inputClassName, styles.input)}
        style={{ paddingLeft: `${width + 8}px` }}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        value={input}
        {...props}
      />
      <div className={styles.values} ref={targetRef}>
        {values.map((item, idx) => (
          <Button
            border
            className={styles.value}
            key={idx}
            onClick={() => onValueRemove(item)}
          >
            {item}
            <Icon type='close-small' className={styles.delete} />
          </Button>
        ))}
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
  values: ['buy OR bought OR bottom OR bottomed', 'blockchain', 'wow']
}

export default MultiInput
