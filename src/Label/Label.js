import React from 'react'
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
const Label = ({ children, round, fill, accent, as: Base }) => {
  return (
    <Base
      className={cx({
        [`${styles.label} ${styles[accent]}`]: true,
        [styles.round]: round,
        [styles.fill]: fill
      })}
    >
      {children}
    </Base>
  )
}

Label.defaultProps = {
  as: 'span',
  accent: 'waterloo'
}

export default Label
