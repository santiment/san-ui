import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon';
import Panel from '../Panel/Panel';
import styles from './NotificationItem.module.scss'

const titleIcons = {
  error: 'error',
  info: 'info-round',
  warn: 'alert',
  success: 'checkmark-round',
}

const NotificationItem = ({
  title,
  titleIconName,
  hideTitleIcon,
  description,
  variant,
  onClose,
}) => (
  <Panel variant="tooltip" className={cx(styles.wrapper, styles[variant])}>
    {!hideTitleIcon && (
      <Icon
        type={titleIconName || titleIcons[variant]}
        className={cx(styles.icon, styles.titleIcon)}
      />
    )}
    <div className={styles.messageArea}>
      {title && (
        <div className={styles.title}>
          {title}
        </div>
      )}
      {description && (
        <div className={styles.description}>
          {description}
        </div>
      )}
    </div>
    <Icon
      type="close"
      onClick={onClose}
      className={cx(styles.icon, styles.closeIcon)}
    />
  </Panel>
)

NotificationItem.propTypes = {
  description: PropTypes.string,
  hideTitleIcon: PropTypes.bool,
  titleIconName: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
  title: PropTypes.string
}

NotificationItem.defaultProps = {
  hideTitleIcon: false,
}

export default NotificationItem
