import React from 'react'
import cx from 'classnames'
import Modal from '../Modal'
import Panel from '../Panel/Panel'
import Icon from '../Icon'
import Button from '../Button'
import styles from './Dialog.module.scss'

const Dialog = ({ classes, title, children, showCloseBtn, ...props }) => (
  <Modal
    {...props}
    classes={{
      wrapper: styles.wrapper,
      modal: cx(styles.modal, classes.dialog)
    }}
    as={Panel}
  >
    {closeModal => (
      <>
        <Panel.Title withPadding className={cx(styles.title, classes.title)}>
          {title}
          {showCloseBtn && (
            <Icon type='close' onClick={closeModal} className={styles.close} />
          )}
        </Panel.Title>
        {children}
      </>
    )}
  </Modal>
)

Dialog.ScrollContent = ({ className, ...props }) => (
  <Panel.Content className={cx(styles.content, className)} {...props} />
)

Dialog.Actions = ({ className, ...props }) => (
  <div className={cx(styles.actions, className)} {...props} />
)

Dialog.Cancel = props => <Button border {...props} />

Dialog.Approve = props => <Button variant='fill' accent='positive' {...props} />

Dialog.defaultProps = {
  showCloseBtn: true,
  classes: {
    dialog: '',
    title: ''
  }
}

export default Dialog
