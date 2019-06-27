import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

const Loader = ({ className, variant }) => (
  <div className={cx(styles.loader, className)}>
    <span className={cx(styles.dot, { [styles[variant]]: variant })} />
    <span className={cx(styles.dot, { [styles[variant]]: variant })} />
    <span className={cx(styles.dot, { [styles[variant]]: variant })} />
    <span className={cx(styles.dot, { [styles[variant]]: variant })} />
  </div>
)

Loader.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string
}

Loader.defaultProps = {
  className: '',
  variant: 'dark'
}

export default Loader
