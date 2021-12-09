import React, { useState } from 'react'
import VirtualizedSelect from 'react-select-virtualized'
import { components } from 'react-select'
import cx from 'classnames'
import Notification from '../Notification'
import Icon from '../Icon'
import styles from './Select.module.scss'

function SelectContainer (props) {
  return (
    <components.SelectContainer className={styles.selectContainer} {...props}>
      {props.children}
    </components.SelectContainer>
  )
}

function Control (props) {
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

function Input (props) {
  return (
    <components.Input className={styles.input} {...props}>
      {props.children}
    </components.Input>
  )
}

function ValueContainer (props) {
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

function ClearIndicator (props) {
  return (
    <components.ClearIndicator className={styles.clearIndicator} {...props}>
      <Icon type='close-small' />
    </components.ClearIndicator>
  )
}

function IndicatorSeparator (props) {
  return (
    <components.IndicatorSeparator
      className={styles.indicatorSeparator}
      {...props}
    />
  )
}

function MultiValueRemove (props) {
  return (
    <components.MultiValueRemove {...props}>
      <Icon type='close-small' />
    </components.MultiValueRemove>
  )
}

function DropdownIndicator (props) {
  return (
    <components.DropdownIndicator
      className={styles.dropdownIndicator}
      {...props}
    >
      <Icon type='arrow-down' />
    </components.DropdownIndicator>
  )
}

function IndicatorsContainer (props) {
  return (
    <components.IndicatorsContainer
      className={styles.indicatorsContainer}
      {...props}
    >
      {props.children}
    </components.IndicatorsContainer>
  )
}

function Placeholder (props) {
  return (
    <components.Placeholder className={styles.placeholder} {...props}>
      {props.children}
    </components.Placeholder>
  )
}

function Menu (props) {
  return (
    <components.Menu className={styles.menu} {...props}>
      {props.children}
    </components.Menu>
  )
}

function SingleValue (props) {
  return (
    <components.SingleValue className={styles.singleValue} {...props}>
      {props.children}
    </components.SingleValue>
  )
}

function MultiValue (props) {
  return (
    <components.MultiValue className={styles.multiValue} {...props}>
      {props.children}
    </components.MultiValue>
  )
}

function Select ({
  isError,
  errorText,
  errorClassName,
  customStyles,
  ...rest
}) {
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
