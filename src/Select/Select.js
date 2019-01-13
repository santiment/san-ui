import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BaseSelect from './BaseSelect'
import styles from './BaseSelect.module.scss'

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

export default HorizontalSelect
