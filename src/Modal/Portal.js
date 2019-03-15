import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Panel from '../Panel/Panel';
import styles from "./Modal.module.scss";

class Portal extends React.Component {
  componentDidMount() {
    const dimmer = document.querySelector('#ui-modal').getElementsByClassName(styles.container)[0];
    dimmer.focus();
  }

  handleOnKeyUp = e => {
    if (e.keyCode == 27) {
      this.props.closeModal();
    }
  };

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
      document.querySelector('#ui-modal'),
    );
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Portal;
