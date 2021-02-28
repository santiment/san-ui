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
    open: this.props.defaultOpen || this.props.open,
    showCloseAnimation: false,
    // to prevent false-click and close dialog. Useful for popup, that appears on non-user clicks (after timeout) or several fast clicks
    closeOnDimmed: !this.props.preventCloseOnDimmedFromStart
  }

  componentDidMount () {
    window.addEventListener('keyup', this.onKeyUp)
  }

  componentDidUpdate ({ open: prevOpen }, prevState) {
    if (
      this.props.preventCloseOnDimmedFromStart &&
      prevState.open !== this.state.open &&
      this.state.open
    ) {
      this.closeTimer = setTimeout(
        () => this.setState({ closeOnDimmed: true }),
        1000
      )
    }

    const isControlled = typeof this.props.open !== 'undefined'

    if (isControlled && this.props.open !== prevOpen) {
      if (this.props.open) {
        this.setState({ open: true })
      } else if (this.props.withAnimation) {
        if (!this.state.showCloseAnimation) {
          this.setState({ showCloseAnimation: true })
          setTimeout(
            () => this.setState({ open: false, showCloseAnimation: false }),
            150
          )
        }
      } else {
        this.setState({ open: false })
      }
    }

    if (
      !this.state.open &&
      this.props.preventCloseOnDimmedFromStart &&
      this.state.closeOnDimmed
    ) {
      this.setState({ closeOnDimmed: false })
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
    const isControlled = typeof this.props.open !== 'undefined'
    if (isControlled) {
      this.props.onClose()
    } else {
      if (this.props.withAnimation) {
        this.setState({ showCloseAnimation: true })
        setTimeout(
          () =>
            this.setState(
              { open: false, showCloseAnimation: false },
              this.props.onClose
            ),
          150
        )
      } else {
        this.setState({ open: false }, this.props.onClose)
      }
    }
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
      withAnimation,
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
                  withAnimation && styles.modal__withAnimation,
                  withAnimation && showCloseAnimation && styles.hide,
                  classes.modal
                )}
                {...modalProps}
              >
                {render}
              </El>
              <div
                className={cx(
                  styles.dimmed,
                  withAnimation && styles.dimmed__withAnimation,
                  classes.bg
                )}
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
