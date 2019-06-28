import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './Loader.module.scss'

const Loader = ({ className }) => (
  <div className={cx(styles.loader, className)}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
)

Loader.propTypes = { className: PropTypes.string }

Loader.defaultProps = { className: '' }

export default Loader
