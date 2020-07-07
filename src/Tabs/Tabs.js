import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { BaseSelect, toggleSingle } from '../Selects'
import styles from './Tabs.module.scss'

const Tabs = ({ className, classes = {}, defaultSelectedIndex, ...props }) => (
  <div className={cx(styles.tabs, className)}>
    <BaseSelect
      stateReducer={toggleSingle}
      className={cx(styles.tab, classes.tab)}
      selectedClassName={cx(styles.selected, classes.selectedTab)}
      disabledClassName={cx(styles.disabled, classes.disabledTab)}
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
