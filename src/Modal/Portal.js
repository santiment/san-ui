import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Panel from '../Panel/Panel';
import styles from "./Modal.module.scss";

class Portal extends React.Component {
  constructor() {
    super();

    this.mountNode = document.createElement('div');
    this.mountNode.id = 'ui-modal';
    this.mountNode.className = styles.wrapper;
    document.body.appendChild(this.mountNode);
  }

  handleOnKeyUp = e => {
    if (e.keyCode == 27) {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    document.body.removeChild(this.mountNode);
  }

  render() {
    const { children, closeModal } = this.props;

    return ReactDOM.createPortal(
      <React.Fragment>
        <Panel variant="modal" className={styles.dialog}>
          {children}
        </Panel>
        <div
          tabIndex={0}
          className={styles.container}
          onClick={closeModal}
          onKeyUp={this.handleOnKeyUp}
        />
      </React.Fragment>,
      this.mountNode
    );
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Portal;
