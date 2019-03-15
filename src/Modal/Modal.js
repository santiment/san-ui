import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ModalHeader from './ModalHeader'
import ModalActions from './ModalActions'
import Panel from '../Panel/Panel'
import styles from './Modal.module.scss'

let mountNode = document.querySelector('#ui-modal')

if (!mountNode) {
  mountNode = document.createElement('div')
  mountNode.id = 'ui-modal'
  document.body.appendChild(mountNode)
}

class Modal extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  openModal = () => {
    this.setState({ open: true }, this.props.onOpen)
  }

  closeModal = () => {
    this.setState({ open: false }, this.props.onClose)
  }

  onKeyUp = ({ code }) => {
    if (code === 'Escape' && this.state.open) {
      this.closeModal()
    }
  }

  onConfirmClick = () => {
    this.props.onConfirmClick(this.closeModal)
  }

  render() {
    const {
      className,
      trigger,
      hideCloseIcon,
      title,
      confirmLabel,
      cancelLabel,
      onConfirmClick,
      children
    } = this.props
    const { open } = this.state

    return (
      <>
        {React.cloneElement(trigger, {
          onClick: this.openModal
        })}
        {open &&
          ReactDOM.createPortal(
            <>
              <Panel variant='modal' className={cx(className, styles.dialog)}>
                <ModalHeader
                  onCloseModal={this.closeModal}
                  hideCloseIcon={hideCloseIcon}
                  title={title}
                />
                <div className={styles.content}>
                  {children}
                  <ModalActions
                    closeModal={this.closeModal}
                    onConfirmClick={onConfirmClick && this.onConfirmClick}
                    confirmLabel={confirmLabel}
                    cancelLabel={cancelLabel}
                  />
                </div>
              </Panel>
              <div className={styles.dimmed} onClick={this.closeModal} />
            </>,
            mountNode
          )}
      </>
    )
  }
}

Modal.defaultProps = {
  hideCloseIcon: false,
  onClose: () => {},
  onOpen: () => {},
  onConfirmClick: undefined
}

Modal.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.node.isRequired,
  hideCloseIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirmClick: PropTypes.func
}

export default Modal
