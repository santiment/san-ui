import React from 'react'
import BaseSelect from './BaseSelect'
import { toggleSingle } from './BaseSelect'
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

Tabs.defaultProps = {
  className: ''
}

export default Tabs
