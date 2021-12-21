import React, { useCallback, useState } from 'react'
import { components, components as ReactSelectComponents } from 'react-select'
import cx from 'classnames'
import Notification from '../Notification'
import Icon from '../Icon'
import SelectComponent from './SelectComponent'
import styles from './Select.module.scss'

const ClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <Icon type='close-small' />
  </components.ClearIndicator>
)

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Icon type='close-small' />
  </components.MultiValueRemove>
)

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <Icon type='arrow-down' />
  </components.DropdownIndicator>
)

const Select = ({
  isError,
  errorText,
  errorClassName,
  customStyles,
  components,
  optionHeight,
  onMenuOpen,
  ...rest
}) => {
  const [isErrorNotificationOpen, setIsErrorNotificationOpen] = useState(
    isError
  )

  const originalSelectContainerComponent =
    (components && components.SelectContainer) ||
    ReactSelectComponents.SelectContainer

  const SelectContainer = useCallback(props => {
    const { className } = props

    return originalSelectContainerComponent({
      ...props,
      className: cx(styles.selectContainer, className)
    })
  }, [originalSelectContainerComponent])

  const originalControlComponent =
    (components && components.Control) || ReactSelectComponents.Control

  const Control = useCallback(props => {
    const {
      selectProps: { menuIsOpen, isDisabled },
      className
    } = props

    return originalControlComponent({
      ...props,
      className: cx(
        styles.control,
        menuIsOpen && styles.menuIsOpen,
        isError && styles.error,
        isDisabled && styles.disabled,
        className
      )
    })
  }, [originalControlComponent])

  const originalInputComponent =
    (components && components.Input) || ReactSelectComponents.Input

  const Input = useCallback(props => {
    const { className } = props

    return originalInputComponent({
      ...props,
      className: cx(styles.input, className)
    })
  }, [originalInputComponent])

  const originalValueContainerComponent =
    (components && components.ValueContainer) ||
    ReactSelectComponents.ValueContainer

  const ValueContainer = useCallback(props => {
    const { className, isMulti } = props

    return originalValueContainerComponent({
      ...props,
      className: cx(styles.valueContainer, isMulti && styles.multi, className)
    })
  }, [originalValueContainerComponent])

  const originalClearIndicatorComponent =
    (components && components.ClearIndicator) || ClearIndicator

  const ClearIndicatorComponent = useCallback(props => {
    const { className } = props

    return originalClearIndicatorComponent({
      ...props,
      className: cx(styles.clearIndicator, className)
    })
  }, [originalClearIndicatorComponent])

  const originalIndicatorSeparatorComponent =
    (components && components.IndicatorSeparator) ||
    ReactSelectComponents.IndicatorSeparator

  const IndicatorSeparator = useCallback(props => {
    const {
      hasValue,
      selectProps: { isClearable },
      className
    } = props

    return originalIndicatorSeparatorComponent({
      ...props,
      className: cx(
        styles.indicatorSeparator,
        hasValue && isClearable && styles.hasValue,
        className
      )
    })
  }, [originalIndicatorSeparatorComponent])

  const originalMultiValueRemoveComponent =
    (components && components.MultiValueRemove) || MultiValueRemove

  const MultiValueRemoveComponent = useCallback(
    props => originalMultiValueRemoveComponent(props),
    [originalMultiValueRemoveComponent]
  )

  const originalDropdownIndicatorComponent =
    (components && components.DropdownIndicator) || DropdownIndicator

  const DropdownIndicatorComponent = useCallback(props => {
    const { className } = props

    return originalDropdownIndicatorComponent({
      ...props,
      className: cx(styles.dropdownIndicator, className)
    })
  }, [originalDropdownIndicatorComponent])

  const originalIndicatorsContainerComponent =
    (components && components.IndicatorsContainer) ||
    ReactSelectComponents.IndicatorsContainer

  const IndicatorsContainer = useCallback(props => {
    const { className } = props

    return originalIndicatorsContainerComponent({
      ...props,
      className: cx(styles.indicatorsContainer, className)
    })
  }, [originalIndicatorsContainerComponent])

  const originalPlaceholderComponent =
    (components && components.Placeholder) || ReactSelectComponents.Placeholder

  const Placeholder = useCallback(props => {
    const { className } = props

    return originalPlaceholderComponent({
      ...props,
      className: cx(styles.placeholder, className)
    })
  }, [originalPlaceholderComponent])

  const originalMenuComponent =
    (components && components.Menu) || ReactSelectComponents.Menu

  const Menu = useCallback(props => {
    const { className } = props

    return originalMenuComponent({
      ...props,
      className: cx(styles.menu, className)
    })
  }, [originalMenuComponent])

  const originalSingleValueComponent =
    (components && components.SingleValue) || ReactSelectComponents.SingleValue

  const SingleValue = useCallback(props => {
    const { className } = props

    return originalSingleValueComponent({
      ...props,
      className: cx(styles.singleValue, className)
    })
  }, [originalSingleValueComponent])

  const originalMultiValueComponent =
    (components && components.MultiValue) || ReactSelectComponents.MultiValue

  const MultiValue = useCallback(props => {
    const { className } = props

    return originalMultiValueComponent({
      ...props,
      className: cx(styles.multiValue, className)
    })
  }, [originalMultiValueComponent])

  return (
    <>
      <SelectComponent
        classNamePrefix='virtualized-select'
        optionHeight={optionHeight || 32}
        components={{
          ...components,
          SelectContainer,
          Control,
          Input,
          ValueContainer,
          ClearIndicator: ClearIndicatorComponent,
          MultiValueRemove: MultiValueRemoveComponent,
          MultiValue,
          DropdownIndicator: DropdownIndicatorComponent,
          IndicatorSeparator,
          IndicatorsContainer,
          Placeholder,
          SingleValue,
          Menu
        }}
        isError={isError}
        onMenuOpen={() => {
          isError && setIsErrorNotificationOpen(false)
          onMenuOpen && onMenuOpen()
        }}
        {...rest}
      />
      {errorText && isErrorNotificationOpen && (
        <div className={cx(styles.errorWrapper, errorClassName)}>
          <Notification
            className={styles.errorText}
            title={errorText}
            size='small'
            variant='error'
            onClose={() => setIsErrorNotificationOpen(false)}
          />
        </div>
      )}
    </>
  )
}

export default Select
