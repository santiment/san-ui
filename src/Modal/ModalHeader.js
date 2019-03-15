import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Modal.module.scss'

const ModalHeader = ({ onCloseModal, hideCloseIcon, title }) => (
  <div className={styles.header}>
    <div className={styles.title}>{title}</div>
    {hideCloseIcon || (
      <Icon onClick={onCloseModal} className={styles.closeIcon} type='close' />
    )}
  </div>
)

ModalHeader.defaultProps = {
  hideCloseIcon: false
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  hideCloseIcon: PropTypes.bool,
  onCloseModal: PropTypes.func
}

export default ModalHeader
