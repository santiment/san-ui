import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon';
import Panel from '../Panel/Panel';
import styles from './NotificationItem.module.scss'

const NotificationItem = ({
  title,
  description,
}) => (
  <Panel variant="tooltip" className={styles.wrapper}>
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
    <div className={styles.actionArea}>
      <Icon type="close" className={styles.icon} />
    </div>
  </Panel>
)

NotificationItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

export default NotificationItem
