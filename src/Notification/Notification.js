import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import Panel from '../Panel/Panel'
import styles from './Notification.module.scss'

const titleIcons = {
  error: 'error',
  info: 'info-round',
  warning: 'alert',
  success: 'checkmark-round'
}

const Notification = ({
  title,
  titleIconName,
  className,
  solidFill,
  description,
  variant,
  onClose,
  actions,
  hasCloseBtn,
  classes,
  ...rest
}) => (
  <Panel
    {...rest}
    variant='modal'
    className={cx(
      className,
      styles.wrapper,
      styles[variant],
      solidFill ? styles.solid : styles.default
    )}
  >
    <div className={styles.header}>
      <Icon
        type={titleIconName || titleIcons[variant]}
        width={22}
        height={22}
      />
      <div className={cx(styles.title, classes.title)}>{title}</div>
      {hasCloseBtn && (
        <Icon type='close' onClick={onClose} className={styles.closeIcon} />
      )}
    </div>
    {description && (
      <div className={cx(styles.content, classes.content)}>{description}</div>
    )}
    {actions && (
      <div className={styles.content}>
        {actions.map(({ label, onClick }) => (
          <div key={label} className={styles.action} onClick={onClick}>
            {label}
          </div>
        ))}
      </div>
    )}
  </Panel>
)

Notification.propTypes = {
  className: PropTypes.string,
  description: PropTypes.node,
  solidFill: PropTypes.bool,
  hasCloseBtn: PropTypes.bool,
  titleIconName: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  )
}

Notification.defaultProps = {
  onClose: () => {},
  variant: 'info',
  classes: {},
  hasCloseBtn: true
}

export default Notification
