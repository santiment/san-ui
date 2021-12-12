import React, { useState } from 'react'
import VirtualizedSelect from 'react-select-virtualized'
import { components } from 'react-select'
import cx from 'classnames'
import Notification from '../Notification'
import Icon from '../Icon'
import styles from './Select.module.scss'

const SelectContainer = props => (
  <components.SelectContainer className={styles.selectContainer} {...props}>
    {props.children}
  </components.SelectContainer>
)

const Control = props => {
  const {
    selectProps: { menuIsOpen, isError, isDisabled }
  } = props

  return (
    <components.Control
      className={cx(
        styles.control,
        menuIsOpen && styles.menuIsOpen,
        isError && styles.error,
        isDisabled && styles.disabled
      )}
      {...props}
    >
      {props.children}
    </components.Control>
  )
}

const Input = props => (
  <components.Input className={styles.input} {...props}>
    {props.children}
  </components.Input>
)

const ValueContainer = props => {
  const { isMulti } = props

  return (
    <components.ValueContainer
      className={cx(styles.valueContainer, isMulti && styles.multi)}
      {...props}
    >
      {props.children}
    </components.ValueContainer>
  )
}

const ClearIndicator = props => (
  <components.ClearIndicator className={styles.clearIndicator} {...props}>
    <Icon type='close-small' />
  </components.ClearIndicator>
)

const IndicatorSeparator = props => (
  <components.IndicatorSeparator
    className={styles.indicatorSeparator}
    {...props}
  />
)

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Icon type='close-small' />
  </components.MultiValueRemove>
)

const DropdownIndicator = props => (
  <components.DropdownIndicator className={styles.dropdownIndicator} {...props}>
    <Icon type='arrow-down' />
  </components.DropdownIndicator>
)

const IndicatorsContainer = props => (
  <components.IndicatorsContainer
    className={styles.indicatorsContainer}
    {...props}
  >
    {props.children}
  </components.IndicatorsContainer>
)

const Placeholder = props => (
  <components.Placeholder className={styles.placeholder} {...props}>
    {props.children}
  </components.Placeholder>
)

const Menu = props => (
  <components.Menu className={styles.menu} {...props}>
    {props.children}
  </components.Menu>
)

const SingleValue = props => (
  <components.SingleValue className={styles.singleValue} {...props}>
    {props.children}
  </components.SingleValue>
)

const MultiValue = props => (
  <components.MultiValue className={styles.multiValue} {...props}>
    {props.children}
  </components.MultiValue>
)

const Select = ({
  isError,
  errorText,
  errorClassName,
  customStyles,
  ...rest
}) => {
  const [isErrorNotificationOpen, setIsErrorNotificationOpen] = useState(
    isError
  )

  return (
    <>
      <VirtualizedSelect
        classNamePrefix='virtualized-select'
        optionHeight={32}
        components={{
          SelectContainer,
          Control,
          Input,
          ValueContainer,
          MultiValue,
          DropdownIndicator,
          ClearIndicator,
          IndicatorSeparator,
          IndicatorsContainer,
          Placeholder,
          SingleValue,
          Menu,
          MultiValueRemove
        }}
        isError={isError}
        onMenuOpen={() => isError && setIsErrorNotificationOpen(false)}
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
