import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon';
import Panel from '../Panel/Panel';
import styles from './Notification.module.scss'

const titleIcons = {
  error: 'error',
  info: 'info-round',
  warning: 'alert',
  success: 'checkmark-round',
}

const Notification = ({
  title,
  titleIconName,
  hideTitleIcon,
  solidFill,
  description,
  variant,
  onClose,
  actions,
}) => (
  <Panel
    variant="modal"
    className={cx(styles.wrapper, styles[variant], {
      [styles[`${variant}Solid`]]: solidFill,
      [styles.solid]: solidFill,
      [styles.default]: !solidFill,
    })}
  >
    {!hideTitleIcon && (
      <Icon
        type={titleIconName || titleIcons[variant]}
        className={cx(styles.icon, styles.titleIcon)}
      />
    )}
    <div className={styles.messageArea}>
      <div className={styles.title}>
        {title}
      </div>
      {description && (
        <div className={styles.description}>
          {description}
        </div>
      )}
      {(actions && actions.length) && (
        <div className={styles.actionButtonArea}>
          {actions.map(action => (
            <div
              key={action.label}
              className={styles.actionButton}
              onClick={() => action.onClick(this.props)}
            >
              {action.label}
            </div>
          ))}
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

Notification.propTypes = {
  description: PropTypes.string,
  hideTitleIcon: PropTypes.bool,
  solidFill: PropTypes.bool,
  titleIconName: PropTypes.string,
  onClose: PropTypes.func,
  renderActionButton: PropTypes.func,
  variant: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  timeout: PropTypes.number,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,  
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  )
}

Notification.defaultProps = {
  hideTitleIcon: false,
}

export default Notification
