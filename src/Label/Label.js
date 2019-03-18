import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Label.module.scss'

/*
   accents=[
   black - default
   light-grey
   grey
   dark-grey
   red
   blue
   orange
   green
   cyan
   ]

   border

   variant=[fill, round]
*/
const Label = ({
  children,
  variant,
  empty,
  border,
  round,
  fill,
  accent,
  as: Base
}) => {
  return (
    <Base
      className={cx({
        [styles.label]: true,
        [styles[accent]]: accent,
        [styles[variant]]: variant
      })}
    >
      {children}
    </Base>
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
