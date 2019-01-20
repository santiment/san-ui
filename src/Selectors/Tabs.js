import React from 'react'
import BaseSelect from './BaseSelect'
import { toggleSingle } from './BaseSelect'
import styles from './Tabs.module.scss'

const Tabs = ({ className, selectedIndex, ...props }) => (
  <div className={styles.tabs}>
    <BaseSelect
      stateReducer={toggleSingle}
      className={`${styles.tab}`}
      selectedClassName={styles.selected}
      disabledClassName={styles.disabled}
      {...props}
      selectedIndexes={[selectedIndex]}
    />
  </div>
)

export default Tabs
