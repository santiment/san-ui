import React, { Component } from "react";
import PropTypes from "prop-types";

import ModalHeader from "./ModalHeader";
import Portal from "./Portal";

class Modal extends Component {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({
      open: true,
    });
  };

  closeModal = () => {
    this.setState({
      open: false,
    });
  };

  onClickTrigger = e => {
    const { trigger } = this.props;
    const { open } = this.state;

    if (trigger.props.onClick) {
      trigger.props.onClick(e);
    }

    if (open) {
      this.closeModal();
    } else {
      this.openModal();
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
          onClick: this.onClickTrigger
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
};

export default Modal;
