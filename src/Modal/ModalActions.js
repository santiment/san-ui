import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './Modal.module.scss'

const ModalActions = ({
  onConfirmClick,
  confirmLabel,
  closeModal,
  cancelLabel
}) => {
  if (!onConfirmClick) {
    return null
  }

  return (
    <div className={styles.actions}>
      <Button
        border
        className={styles.btnCancel}
        accent='negative'
        onClick={closeModal}
      >
        {cancelLabel}
      </Button>

      <Button variant='fill' accent='positive' onClick={onConfirmClick}>
        {confirmLabel}
      </Button>
    </div>
  )
}

ModalActions.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel'
}

ModalActions.propTypes = {
  onConfirmClick: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string
}

export default ModalActions
