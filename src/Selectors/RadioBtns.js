import React from 'react'
import PropTypes from 'prop-types'
import LabeledSelector from './LabeledSelect'
import { toggleSingle } from './BaseSelect'
import styles from './RadioBtns.module.scss'

const ContentContainer = () => <div className={styles.btn} />

const RadioBtns = ({ defaultSelectedIndex, ...props }) => (
  <LabeledSelector
    stateReducer={toggleSingle}
    selectElement={<ContentContainer />}
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
