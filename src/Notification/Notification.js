import React from 'react'
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
  solidFill,
  description,
  variant,
  onClose,
  actions,
  renderDescription,
}) => (
  <Panel
    variant="modal"
    className={cx(styles.wrapper, styles[variant], {
      [styles[`${variant}Solid`]]: solidFill,
      [styles.solid]: solidFill,
      [styles.default]: !solidFill,
    })}
  >
    <div className={styles.header}>
      <Icon
        width={20}
        height={20}
        type={titleIconName || titleIcons[variant]}
        className={cx(styles.icon, styles.titleIcon)}
      />
      <div className={styles.title}>
        {title}
      </div>
      <Icon
        type="close"
        onClick={onClose}
        className={cx(styles.icon, styles.closeIcon)}
      />
    </div>
    {description && (
      <div className={styles.description}>
        {description}
      </div>
    )}
    {renderDescription && (
      <div className={styles.description}>
        {renderDescription()}
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
  </Panel>
)

Notification.propTypes = {
  description: PropTypes.string,
  solidFill: PropTypes.bool,
  titleIconName: PropTypes.string,
  onClose: PropTypes.func,
  renderDescription: PropTypes.func,
  variant: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  )
}

Notification.defaultProps = {
  onClose: () => {}
}

export default Notification
