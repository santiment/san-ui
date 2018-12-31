import React from 'react'
import PropTypes from 'prop-types'
import styles from './Panel.module.scss'

const Panel = ({ popup, children, padding, className = '', ...props }) => {
  return (
    <div
      className={`${styles.panel} ${popup ? styles.popup : ''} ${
        padding ? styles.padding : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Panel.propTypes = {
  popup: PropTypes.bool,
  padding: PropTypes.bool
}

export default Panel
