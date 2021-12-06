import React, { useState } from 'react'
import VirtualizedSelect from 'react-select-virtualized'
import { components } from 'react-select'
import cx from 'classnames'
import Notification from '../Notification'
import Icon from '../Icon'
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

const Placeholder = props => (
  <components.Placeholder
    className={styles.placeholder}
    {...props}
    children={props.children}
  />
)

const Menu = props => (
  <components.Menu className={styles.menu} {...props}>
    {props.children}
  </components.Menu>
)

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue className={styles.value} {...props}>
    {children}
  </components.SingleValue>
)

const MultiValueLabel = ({ children, ...props }) => (
  <components.MultiValueLabel className={styles.value} {...props}>
    {children}
  </components.MultiValueLabel>
)

const containerStyles = provided => ({
  ...provided,
  height: 32
})

const controlStyles = isError => (provided, state) => {
  let border = state.selectProps.menuIsOpen
    ? '1px solid var(--jungle-green)'
    : '1px solid var(--porcelain)'

  if (isError) {
    border = '1px solid var(--persimmon)'
  }

  return {
    ...provided,
    minHeight: 32,
    background: state.isDisabled ? 'var(--athens)' : 'var(--white)',
    border,
    boxShadow: 'none',
    ':hover': {
      border: isError
        ? '1px solid var(--persimmon-hover)'
        : '1px solid var(--jungle-green)'
    }
  }
}

const inputStyles = provided => ({ ...provided, margin: 0, padding: 0 })

const menuStyles = provided => ({
  ...provided,
  top: 'unset',
  background: 'var(--white)',
  boxShadow: '0px 4px 8px rgba(24, 27, 43, 0.03)',
  border: '1px solid var(--porcelain)',
  boxSizing: 'border-box',
  zIndex: 2,
  minHeight: 48
})

const valueContainerStyles = (provided, state) => ({
  ...provided,
  padding: state.isMulti ? 4 : '0 10px',
  boxSizing: 'border-box',
  gap: 4
})

const singleValueStyles = (provided, state) => ({
  ...provided,
  color: state.isDisabled ? 'var(--mystic)' : 'var(--rhino)'
})

const multiValueStyles = provided => ({
  ...provided,
  display: 'flex',
  alignItems: 'center',
  height: 22,
  margin: 0,
  padding: '0 8px',
  background: 'var(--white)',
  border: '1px solid var(--porcelain)',
  borderRadius: 4
})

const multiValueLabelStyles = (provided, state) => ({
  ...provided,
  padding: 0,
  paddingLeft: 0,
  color: state.isDisabled ? 'var(--mystic)' : 'var(--rhino)'
})

const multiValueRemoveStyles = provided => ({
  ...provided,
  padding: 0,
  marginLeft: 6,
  fill: 'var(--waterloo)'
})

const placeholderStyles = (provided, state) => ({
  ...provided,
  color: state.isDisabled ? 'var(--mystic)' : 'var(--casper)'
})

const dropdownIndicatorStyles = (provided, state) => ({
  ...provided,
  transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  padding: '10px 12px',
  fill: state.isDisabled ? 'var(--mystic)' : 'var(--waterloo)',
  cursor: 'pointer'
})

const clearIndicatorStyles = (provided, state) => ({
  ...provided,
  padding: '0 12px',
  fill: state.isDisabled ? 'var(--mystic)' : 'var(--waterloo)',
  cursor: 'pointer'
})

const indicatorSeparatorStyles = provided => ({
  ...provided,
  alignSelf: 'stretch',
  backgroundColor: 'var(--porcelain)',
  marginBottom: 0,
  marginTop: 0,
  width: 1,
  minHeight: 30
})

const indicatorContainerStyles = provided => ({
  ...provided,
  height: 30
})

const indicatorsContainerStyles = provided => ({
  ...provided,
  justifyContent: 'center'
})

const getStyles = ({ isError, customStyles }) => ({
  container: containerStyles,
  control: controlStyles(isError),
  input: inputStyles,
  menu: menuStyles,
  valueContainer: valueContainerStyles,
  singleValue: singleValueStyles,
  multiValue: multiValueStyles,
  multiValueLabel: multiValueLabelStyles,
  multiValueRemove: multiValueRemoveStyles,
  placeholder: placeholderStyles,
  dropdownIndicator: dropdownIndicatorStyles,
  clearIndicator: clearIndicatorStyles,
  indicatorSeparator: indicatorSeparatorStyles,
  indicatorContainer: indicatorContainerStyles,
  indicatorsContainer: indicatorsContainerStyles,
  ...customStyles
})

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
        optionHeight={32}
        components={{
          DropdownIndicator,
          ClearIndicator,
          Placeholder,
          SingleValue,
          Menu,
          MultiValueRemove,
          MultiValueLabel
        }}
        styles={getStyles({ isError, customStyles })}
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
