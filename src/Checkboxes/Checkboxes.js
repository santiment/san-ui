import React from 'react'
import cx from 'classnames'
import { LabeledSelect, toggleMultiple } from '../Selects'
import Icon from '../Icon'
import styles from './Checkboxes.module.scss'

const SelectElement = () => (
  <div className={styles.btn}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9'
      height='7'
      viewMode='0 0 9 7'
      className={styles.checkmark}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M1 3l2.5 3L8 1' />
    </svg>
  </div>
)

export const Checkbox = ({ className, isActive, disabled, ...props }) => (
  <div
    className={cx(
      styles.checkbox,
      className,
      isActive && styles.selected,
      disabled && styles.disabled
    )}
    {...props}
  >
    <SelectElement />
  </div>
)

const Checkboxes = props => (
  <LabeledSelect
    stateReducer={toggleMultiple}
    selectElement={<SelectElement />}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
  />
)

export default Checkboxes
