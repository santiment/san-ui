import React from 'react'
import PropTypes from 'prop-types'
import Panel from './Panel'
import styles from './PanelWithHeader.module.scss'

const PanelWithHeader = ({
  header,
  headerClassName,
  contentClassName,
  children,
  ...props
}) => {
  return (
    <Panel {...props}>
      <div className={`${headerClassName} ${styles.header}`}>{header}</div>
      <div className={`${contentClassName} ${styles.content}`}>{children}</div>
    </Panel>
  )
}

PanelWithHeader.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string
}

PanelWithHeader.defaultProps = {
  headerClassName: '',
  contentClassName: ''
}

export default PanelWithHeader
