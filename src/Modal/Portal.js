import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

class Portal extends React.Component {
  constructor() {
    super();

    this.portal = React.createRef();
  }

  componentDidMount() {
    this.portal.current.focus();
  }

  handleOnKeyUp = e => {
    if (e.keyCode == 27) {
      this.props.closeModal();
    }
  };

  handleOnClick = e => {
    if (this.portal.current == e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(
      <div
        tabIndex={0}
        ref={this.portal}
        className={styles.container}
        onClick={this.handleOnClick}
        onKeyUp={this.handleOnKeyUp}
      >
        <div className={styles.dialog}>
          {children}
        </div>
      </div>,
      document.body
    );
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Portal;
