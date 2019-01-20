import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleMultiple } from './BaseSelect'
import styles from './Checkboxes.module.scss'

const ContentContainer = () => <div className={styles.btn} />

const Checkboxes = ({ options, className, ...props }) => (
  <LabeledSelector
    stateReducer={toggleMultiple}
    labels={options}
    selectElement={<ContentContainer />}
    className={`${className}`}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
  />
)

export default Checkboxes
