import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Panel.module.scss'

const Panel = ({ variant, children, padding, className, ...props }) => {
  return (
    <div
      className={cx({
        [`${className} ${styles.panel}`]: true,
        [styles.padding]: padding,
        [styles[variant]]: variant
      })}
      {...props}
    >
      {children}
    </div>
  )
}

Panel.propTypes = {
  variant: PropTypes.oneOf(['tooltip-small', 'tooltip', 'modal']),
  padding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Panel.defaultProps = {
  variant: undefined,
  padding: false,
  className: ''
}

export default Panel
