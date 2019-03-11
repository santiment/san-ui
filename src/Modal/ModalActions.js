import React from "react";
import cx from 'classnames';
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const ModalActions = ({ className, children })  => (
  <div className={cx(styles.actions, className)}>
    {children}
  </div>
)

ModalActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ModalActions
