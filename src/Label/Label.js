import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Label.module.scss'

const Label = ({ variant, accent, as: Base, ...props }) => {
  return (
    <Base
      {...props}
      className={cx({
        [styles.label]: true,
        [styles[accent]]: accent,
        [styles[variant]]: variant
      })}
    />
  )
}

Label.propTypes = {
  as: PropTypes.any,
  variant: PropTypes.oneOf(['border', 'fill', 'round', 'circle']),
  accent: PropTypes.oneOf([
    'athens',
    'casper',
    'waterloo',
    'jungle-green',
    'texas-rose',
    'persimmon',
    'dodger-blue',
    'heliotrope',
    'malibu'
  ])
}

Label.defaultProps = {
  as: 'span',
  variant: undefined,
  accent: undefined
}

export default Label
