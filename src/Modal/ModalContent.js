import React from "react";
import cx from 'classnames';
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const ModalContent = ({ className, children })  => (
  <div className={cx(styles.content, className)}>
    {children}
  </div>
)

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default ModalContent
