import React, { Component } from 'react'
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

class NotificationItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    hideTitleIcon: PropTypes.bool,
    solidFill: PropTypes.bool,
    titleIconName: PropTypes.string,
    onClose: PropTypes.func,
    renderActionButton: PropTypes.func,
    variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
    timeout: PropTypes.number,
    title: PropTypes.string,
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

  static defaultProps = {
    hideTitleIcon: false,
  }

  constructor(props) {
    super(props)

    if (props.timeout) {
      this.timeout = setTimeout(props.onClose, props.timeout)
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  render() {
    const {
      title,
      titleIconName,
      hideTitleIcon,
      solidFill,
      description,
      variant,
      onClose,
      actions,
    } = this.props;

    return (
      <Panel
        variant="tooltip"
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
          {(actions && actions.length) && (
            <div className={styles.actionButtonArea}>
              {actions.map(action => (
                <div key={action.id} className={styles.actionButton} onClick={() => action.onClick(this.props)}>
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
  }
}

export default NotificationItem
