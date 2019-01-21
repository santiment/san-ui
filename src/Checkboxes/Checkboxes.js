import React from 'react'
import { LabeledSelect, toggleMultiple } from '../Selects'
import Icon from '../Icon'
import styles from './Checkboxes.module.scss'

const SelectElement = () => (
  <div className={styles.btn}>
    <Icon type='checkmark' className={styles.checkmark} />
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
