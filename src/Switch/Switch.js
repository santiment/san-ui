import React from 'react'
import PropTypes from 'prop-types'
import styles from './Switch.module.scss'

const Switch = ({ isSwitched, option1, option2, ...props }) => {
  return (
    <div
      className={`${styles.wrapper} ${isSwitched ? styles.switched : ''}`}
      {...props}
    >
      <button className={styles.btn}>{option1}</button>
      <button className={styles.btn}>{option2}</button>
    </div>
  )
}

Switch.propTypes = {
  option1: PropTypes.any.isRequired,
  option2: PropTypes.any.isRequired,
  isSwitched: PropTypes.bool
}

export default Switch
