import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import ModalHeader from "./ModalHeader";
import ModalActions from "./ModalActions";
import Panel from '../Panel/Panel';
import styles from './Modal.module.scss';

let mountNode = document.querySelector('#ui-modal');

if (!mountNode) {
  mountNode = document.createElement('div'),
  mountNode.id = 'ui-modal',
  mountNode.className = styles.wrapper;
  mountNode.style = "visibility:hidden;";
  document.body.appendChild(mountNode)
}

class Modal extends Component {
  state = {
    open: false,
  };

  openModal = () => {
    const { onOpen } = this.props;

    mountNode.setAttribute('style', 'visibility:visible;');
    this.setState({ open: true }, () => {
      onOpen();
      mountNode
        .querySelector(`.${styles.container}`)
        .focus();
    });
  };

  closeModal = () => {
    const { onClose } = this.props;
    mountNode.setAttribute('style', 'visibility:hidden;');
    this.setState({ open: false }, onClose);
  };

  handleOnKeyUp = e => {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  };

  render() {
    const {
      className,
      trigger,
      hideCloseIcon,
      title,
      onConfirmClick,
      confirmLabel,
      cancelLabel,
      children,
    } = this.props;
    const { open } = this.state;

    return (
      <div className={className}>
        {React.cloneElement(trigger, {
          onClick: this.openModal
        })}
        {open && ReactDOM.createPortal(
          <React.Fragment>
            <Panel variant="modal" className={styles.dialog}>
              <ModalHeader
                onCloseModal={this.closeModal}
                hideCloseIcon={hideCloseIcon}
                title={title}
              />
              {children}
              <ModalActions
                closeModal={this.closeModal}
                onConfirmClick={onConfirmClick}
                confirmLabel={confirmLabel}
                cancelLabel={cancelLabel}
              />
            </Panel>
            <div
              tabIndex={0}
              className={styles.container}
              onClick={this.closeModal}
              onKeyUp={this.handleOnKeyUp}
            />
          </React.Fragment>,
          mountNode,
        )}
      </div>
    );
  }
}

Modal.defaultProps = {
  hideCloseIcon: false,
  onClose: () => {},
  onOpen: () => {},
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
  onConfirmClick: PropTypes.func,
};

export default Modal;
