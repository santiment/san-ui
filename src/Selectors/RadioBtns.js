import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleSingle } from './BaseSelect'
import styles from './RadioBtns.module.scss'

const ContentContainer = () => <div className={styles.btn} />

const RadioBtns = ({ options, className, selectedIndex, ...props }) => (
  <LabeledSelector
    stateReducer={toggleSingle}
    labels={options}
    selectElement={<ContentContainer />}
    className={`${className}`}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
    selectedIndexes={selectedIndex && [selectedIndex]}
  />
)

RadioBtns.defaultProps = {
  selectedIndex: undefined
}

export default RadioBtns
