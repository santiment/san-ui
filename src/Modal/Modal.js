import React, { Component } from "react";
import PropTypes from "prop-types";

import ModalHeader from "./ModalHeader";
import Portal from "./Portal";

class Modal extends Component {
  state = {
    open: false,
  };

  openModal = () => {
    const { onOpen } = this.props;
    this.setState({
      open: true,
    });

    if (onOpen) {
      onOpen();
    }
  };

  closeModal = () => {
    const { onClose } = this.props;
    this.setState({
      open: false,
    });

    if (onClose) {
      onClose();
    }
  };

  render() {
    const {
      className,
      trigger,
      hideCloseIcon,
      title,
      children,
    } = this.props;
    const { open } = this.state;

    return (
      <div className={className}>
        {React.cloneElement(trigger, {
          onClick: this.openModal
        })}
        {open && (
          <Portal closeModal={this.closeModal}>
            <ModalHeader
              onCloseModal={this.closeModal}
              hideCloseIcon={hideCloseIcon}
              title={title}
            />
            {children}
          </Portal>
        )}
      </div>
    );
  }
}

Modal.defaultProps = {
  hideCloseIcon: false,
}

Modal.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.node.isRequired,
  hideCloseIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default Modal;
