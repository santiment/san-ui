import React from 'react'
import PropTypes from 'prop-types'
import styles from './Switch.module.scss'

const Switch = ({ selectedIndex, onClick, isSwitched, options, ...props }) => {
  return (
    <div
      // className={`${styles.wrapper} ${isSwitched ? styles.switched : ''}`}
      className={styles.wrapper}
      {...props}
    >
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

Switch.propTypes = {
  options: PropTypes.any.isRequired,
  isSwitched: PropTypes.bool,
  selectedIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default Switch
