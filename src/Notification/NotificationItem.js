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
    titleIconName: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['info', 'warn', 'success', 'error']),
    timeout: PropTypes.number,
    title: PropTypes.string
  }

  defaultProps = {
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
      description,
      variant,
      onClose,
    } = this.props;

    return (
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
  }
}

export default NotificationItem
