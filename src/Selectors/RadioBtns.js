import React from 'react'
import LabeledSelector from './LabeledSelect'
import { toggleSingle } from './BaseSelect'
import styles from './RadioBtns.module.scss'

const ContentContainer = () => <div className={styles.btn} />

const RadioBtns = ({ options, defaultSelectedIndex, ...props }) => (
  <LabeledSelector
    stateReducer={toggleSingle}
    labels={options}
    selectElement={<ContentContainer />}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
    defaultSelectedIndexes={defaultSelectedIndex && [defaultSelectedIndex]}
  />
)

RadioBtns.defaultProps = {
  defaultSelectedIndex: undefined
}

export default RadioBtns
