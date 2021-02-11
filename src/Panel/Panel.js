import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Panel.module.scss'

const Panel = ({
  variant,
  children,
  padding,
  className,
  forwardedRef,
  as: El,
  ...props
}) => {
  return (
    <El
      className={cx({
        [`${className} ${styles.panel}`]: true,
        [styles.padding]: padding,
        [styles[variant]]: variant
      })}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </El>
  )
}

Panel.Title = ({ className, withPadding, ...props }) => (
  <div
    {...props}
    className={cx(styles.header, className, withPadding && styles.padding)}
  />
)

Panel.Content = ({ className, withPadding, ...props }) => (
  <div
    {...props}
    className={cx(styles.content, className, withPadding && styles.padding)}
  />
)

Panel.propTypes = {
  variant: PropTypes.oneOf(['modal']),
  padding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Panel.defaultProps = {
  variant: undefined,
  padding: false,
  className: '',
  as: 'div'
}

export default Panel
