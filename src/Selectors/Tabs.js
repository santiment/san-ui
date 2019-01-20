import React from 'react'
import BaseSelect from './BaseSelect'
import { toggleSingle } from './BaseSelect'
import styles from './Tabs.module.scss'

const Tabs = ({ className, selectedIndex, ...props }) => (
  <div className={`${styles.tabs} ${className}`}>
    <BaseSelect
      stateReducer={toggleSingle}
      className={`${styles.tab}`}
      selectedClassName={styles.selected}
      disabledClassName={styles.disabled}
      {...props}
      selectedIndexes={selectedIndex && [selectedIndex]}
    />
  </div>
)

Tabs.defaultProps = {
  className: ''
}

export default Tabs
