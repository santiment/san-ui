import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import BaseSelect from './BaseSelect'
import styles from './HorizontalSelect.module.scss'

const HorizontalSelect = ({ variant, options, onSelect, selectedIndex }) => {
  return (
    <div className={cx({ [styles.wrapper]: true, [styles[variant]]: variant })}>
      <BaseSelect
        className={styles.btn}
        selectedIndex={selectedIndex}
        selectedClassName={styles.selected}
        onSelect={onSelect}
        options={options}
      />
    </div>
  )
}

HorizontalSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
  selectedIndex: PropTypes.number
}

export default HorizontalSelect
