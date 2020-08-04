import React from 'react'
import cx from 'classnames'
import Icon from '../Icon'
import styles from './Toggle.module.scss'

const Toggle = ({
  isActive,
  className = '',
  IconActive,
  IconNotActive,
  disabled,
  onClick: onToggleClick,
  ...props
}) => {
  return (
    <div
      className={cx(
        styles.toggle,
        isActive && styles.active,
        disabled && styles.disabled,
        className
      )}
      onClick={() => (disabled ? {} : onToggleClick())}
      {...props}
    >
      {IconActive ? (
        <IconActive className={cx(styles.icon, styles.icon__active)} />
      ) : (
        <Icon
          type='checkmark'
          className={cx(styles.icon, styles.icon__active)}
        />
      )}

      {IconNotActive ? (
        <IconNotActive className={cx(styles.icon, styles.icon__notActive)} />
      ) : (
        <Icon
          type='close-small'
          className={cx(styles.icon, styles.icon__notActive)}
        />
      )}
    </div>
  )
}

export default Toggle
