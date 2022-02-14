import React from 'react'
import cx from 'classnames'
import Modal from '../Modal'
import Panel from '../Panel/Panel'
import Icon from '../Icon'
import Button from '../Button'
import styles from './Dialog.module.scss'

/**
 * "Dialog" is based on the "Modal" component and inherits all of its possible props
 */
const Dialog = ({
  classes,
  title,
  children,
  autoFocus,
  showCloseBtn,
  withHeader,
  size,
  ...props
}) => (
  <Modal
    as={Panel}
    {...props}
    classes={{
      wrapper: cx(styles.wrapper, classes.modalWrapper),
      modal: cx(
        styles.modal,
        size === 's' && styles.modal__s,
        size === 'm' && styles.modal__m,
        classes.dialog,
        !autoFocus && styles.animation
      )
    }}
  >
    {closeModal => (
      <>
        <Panel.Title
          withPadding
          className={cx(
            styles.title,
            !title && styles.title__emptyTitle,
            classes.title
          )}
        >
          <span>{title}</span>
          {showCloseBtn && (
            <div onClick={closeModal} className={styles.close}>
              <Icon type='close-medium' />
            </div>
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

Dialog.Cancel = ({ className, ...props }) => (
  <Button border className={cx(styles.cancel, className)} {...props} />
)

Dialog.Approve = ({ className, disabled, isLoading, ...props }) => (
  <Button
    variant='fill'
    accent='positive'
    disabled={disabled}
    isLoading={isLoading}
    className={cx(
      styles.approve,
      className,
      disabled && styles.disabled,
      isLoading && styles.loading
    )}
    {...props}
  />
)

Dialog.defaultProps = {
  showCloseBtn: true,
  withHeader: true,
  withAnimation: true,
  size: null,
  classes: {
    dialog: '',
    title: ''
  }
}

export default Dialog
