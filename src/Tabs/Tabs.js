import React from 'react'
import PropTypes from 'prop-types'
import { BaseSelect, toggleSingle } from '../Selects'
import styles from './Tabs.module.scss'

const Tabs = ({ className, defaultSelectedIndex, ...props }) => (
  <div className={`${styles.tabs} ${className}`}>
    <BaseSelect
      stateReducer={toggleSingle}
      className={`${styles.tab}`}
      selectedClassName={styles.selected}
      disabledClassName={styles.disabled}
      {...props}
      defaultSelectedIndexes={defaultSelectedIndex && [defaultSelectedIndex]}
    />
  </div>
)

Tabs.propTypes = {
  className: PropTypes.string
}

Tabs.defaultProps = {
  className: ''
}

export default Tabs
