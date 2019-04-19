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
    open: false
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
      as: El
    } = this.props
    const { open } = this.state

    const render =
      typeof children === 'function' ? children(this.closeModal) : children

    return (
      <>
        {React.cloneElement(trigger, {
          onClick: this.openModal
        })}
        {open &&
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
  hideCloseIcon: false,
  onClose: () => {},
  onOpen: () => {},
  as: 'div',
  classes: {}
}

Modal.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.node.isRequired,
  hideCloseIcon: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

export default Modal
