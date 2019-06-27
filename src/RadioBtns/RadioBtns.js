import React from 'react'
import PropTypes from 'prop-types'
import { LabeledSelect, toggleSingle } from '../Selects'
import styles from './RadioBtns.module.scss'

const SelectElement = () => <div className={styles.btn} />

const RadioBtns = ({ defaultSelectedIndex, ...props }) => (
  <LabeledSelect
    stateReducer={toggleSingle}
    selectElement={<SelectElement />}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
    defaultSelectedIndexes={defaultSelectedIndex && [defaultSelectedIndex]}
  />
)

export default RadioBtns
