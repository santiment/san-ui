import React from 'react'
import cx from 'classnames'
import { LabeledSelect, toggleMultiple } from '../Selects'
import Icon from '../Icon'
import styles from './Checkboxes.module.scss'

const SelectElement = () => (
  <div className={styles.btn}>
    <Icon type='checkmark' className={styles.checkmark} />
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
