import React from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './BaseSelect'
import styles from './HorizontalSelect.module.scss'

const HorizontalSelect = ({ options, onSelect, selectedIndex }) => {
  return (
    <div className={styles.wrapper}>
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
