import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Modal.module.scss'
/**
 * "Modal" is a primitive for building higher level abstractions like "Dialog".
 */
class Modal extends Component {
  state = {
    open: this.props.defaultOpen
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
  }

  openModal = () => {
    this.setState({ open: true }, this.props.onOpen)
  }

  closeModal = () => {
    this.setState({ open: false }, this.props.onClose)
  }

  onKeyUp = ({ code }) => {
    if (code === 'Escape') {
      this.closeModal()
    }
  }

  render () {
    const {
      className,
      trigger,
      children,
      showCloseIcon,
      closeClassName,
      classes,
      as: El,
      open
    } = this.props

    const isControlled = open !== undefined
    const shouldOpen = isControlled ? open : this.state.open

    const render =
      typeof children === 'function' ? children(this.closeModal) : children

    return (
      <>
        {!isControlled &&
          React.cloneElement(trigger, {
            onClick: this.openModal
          })}
        {shouldOpen &&
          ReactDOM.createPortal(
            <div className={cx(styles.wrapper, classes.wrapper)}>
              <El className={cx(styles.modal, classes.modal)}>{render}</El>
              <div
                className={cx(styles.dimmed, classes.bg)}
                onClick={this.closeModal}
              />
            </div>,
            document.body
          )}
      </>
    )
  }
}

Modal.defaultProps = {
  onClose: () => {},
  onOpen: () => {},
  as: 'div',
  classes: { wrapper: '', modal: '', bg: '' },
  open: undefined,
  defaultOpen: false
}

Modal.propTypes = {
  trigger: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,

  /** Used for controlling modal from outside*/
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool
}

export default Modal
