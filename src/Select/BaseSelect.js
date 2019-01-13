import React from 'react'
import PropTypes from 'prop-types'
import styles from './BaseSelect.module.scss'

const BaseSelect = ({ selectedIndex, onClick, options, ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      {options.map((option, i) => {
        return (
          <button
            key={i}
            onClick={() => onClick(i)}
            className={`${styles.btn} ${
              selectedIndex === i ? styles.selected : ''
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

BaseSelect.propTypes = {
  options: PropTypes.any.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default BaseSelect
