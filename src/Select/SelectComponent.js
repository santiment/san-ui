import React, { useState, useCallback } from 'react'
import { components as ReactSelectComponents } from 'react-select'

export const SelectComponent = React.memo(props => {
  const {
    onKeyDown: originalOnKeyDown,
    onMenuClose: originalOnMenuClose
  } = props

  const [hasUserSelectedOption, setHasUserSelectedOption] = useState(
    props.value != null
  )

  const onKeyDown = useCallback((e, ...otherArgs) => {
    if (
      (e.key === 'ArrowDown' || e.key === 'ArrowUp') &&
      !hasUserSelectedOption
    ) {
      e.preventDefault()

      setHasUserSelectedOption(true)
    }

    return originalOnKeyDown && originalOnKeyDown(e, ...otherArgs)
  }, [originalOnKeyDown, hasUserSelectedOption, setHasUserSelectedOption])

  const onMenuClose = useCallback((...args) => {
    setHasUserSelectedOption(false)

    return originalOnMenuClose && originalOnMenuClose(...args)
  }, [originalOnMenuClose, setHasUserSelectedOption])

  const originalOptionComponent =
    (props.components && props.components.Option) ||
    ReactSelectComponents.Option

  const OptionComponent = useCallback(props => {
    return originalOptionComponent({
      ...props,
      innerProps: {
        ...props.innerProps,
        onMouseOver: (...args) => {
          setHasUserSelectedOption(true)

          return props.innerProps.onMouseOver(...args)
        }
      }
    })
  }, [originalOptionComponent, setHasUserSelectedOption])

  return null
})

SelectComponent.displayName = 'SelectComponent'

export default SelectComponent
