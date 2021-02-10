import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Modal.module.scss'
/**
 * "Modal" is a primitive for building higher level abstractions like "Dialog".
 */
class Modal extends Component {
  static getDerivedStateFromProps ({ open }) {
    if (typeof open === 'undefined') {
      return null
    }

    return {
      open
    }
  }

  state = {
    open: this.props.defaultOpen,
    showCloseAnimation: false,
    // to prevent false-click and close dialog. Useful for popup, that appears on non-user clicks (after timeout) or several fast clicks
    closeOnDimmed: !this.props.preventCloseOnDimmedFromStart
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentDidUpdate ({ open: prevOpen }) {
    if (
      this.props.preventCloseOnDimmedFromStart &&
      prevOpen !== this.state.open &&
      this.state.open
    ) {
      this.closeTimer = setTimeout(() => {
        this.setState({ closeOnDimmed: true })
      }, 1000)
    }

    if (
      !this.state.open &&
      this.props.preventCloseOnDimmedFromStart &&
      this.state.closeOnDimmed
    ) {
      this.setState({ closeOnDimmed: false })
    }

    if (this.state.showCloseAnimation) {
      setTimeout(
        () =>
          this.setState(
            { open: false, showCloseAnimation: false },
            this.props.onClose
          ),
        150
      )
    }
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.onKeyUp)
    clearTimeout(this.closeTimer)
  }

  openModal = () => {
    this.setState({ open: true }, this.props.onOpen)
  }

  closeModal = () => {
    this.setState({ showCloseAnimation: true })
  }

  onDimmedClose = () => {
    if (this.state.closeOnDimmed) {
      this.closeModal()
    }
  }

  onKeyUp = ({ code }) => {
    if (code === 'Escape' && this.state.open) {
      this.closeModal()
    }
  }

  render () {
    const { open, showCloseAnimation } = this.state
    const {
      trigger,
      children,
      classes,
      as: El,
      passOpenStateAs,
      modalProps = {}
    } = this.props

    const render =
      typeof children === 'function' ? children(this.closeModal) : children

    return (
      <>
        {trigger &&
          React.cloneElement(trigger, {
            onClick: trigger.props.onClick || this.openModal,
            [passOpenStateAs]: passOpenStateAs ? open : undefined
          })}
        {open &&
          ReactDOM.createPortal(
            <div className={cx(styles.wrapper, classes.wrapper)}>
              <El
                className={cx(
                  styles.modal,
                  showCloseAnimation && styles.hide,
                  classes.modal
                )}
                {...modalProps}
              >
                {render}
              </El>
              <div
                className={cx(styles.dimmed, classes.bg)}
                onClick={this.onDimmedClose}
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
