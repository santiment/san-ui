import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Icon from '../Icon'
import styles from './InputWithIcon.module.scss'

const InputWithIcon = ({
  icon,
  iconPosition,
  className,
  inputClassName,
  ...props
}) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <Input
        className={`${inputClassName} ${styles.input} ${styles[iconPosition]}`}
        {...props}
      />
      {iconPosition && (
        <Icon
          type={icon}
          className={`${styles.icon} ${styles[iconPosition]}`}
        />
      )}
    </div>
  )
}

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  inputClassName: PropTypes.string
}

InputWithIcon.defaultProps = {
  iconPosition: undefined,
  className: '',
  inputClassName: ''
}

export default InputWithIcon
