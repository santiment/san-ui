import React from 'react'
import PropTypes from 'prop-types'
import LabeledSelector from './LabeledSelect'
import { toggleSingle } from './BaseSelect'
import styles from './RadioBtns.module.scss'

const SelectElement = () => <div className={styles.btn} />

const RadioBtns = ({ defaultSelectedIndex, ...props }) => (
  <LabeledSelector
    stateReducer={toggleSingle}
    selectElement={<SelectElement />}
    selectedClassName={styles.selected}
    disabledClassName={styles.disabled}
    {...props}
    defaultSelectedIndexes={defaultSelectedIndex && [defaultSelectedIndex]}
  />
)

RadioBtns.propTypes = {
  defaultSelectedIndex: PropTypes.string
}

RadioBtns.defaultProps = {
  defaultSelectedIndex: undefined
}

export default RadioBtns
