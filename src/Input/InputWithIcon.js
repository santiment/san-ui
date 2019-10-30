import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from './Input'
import Icon from '../Icon'
import styles from './InputWithIcon.module.scss'

const InputWithIcon = ({
  icon,
  iconPosition,
  isError,
  className,
  inputClassName,
  iconClassName,
  ...props
}) => {
  return (
    <div className={cx(className, styles.wrapper, isError && styles.error)}>
      <Input
        className={cx(inputClassName, styles.input, styles[iconPosition])}
        isError={isError}
        {...props}
      />
      {iconPosition && (
        <Icon
          type={icon}
          className={cx(iconClassName, styles.icon, styles[iconPosition])}
        />
      )}
    </div>
  )
}

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  isError: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  iconClassName: PropTypes.string
}

InputWithIcon.defaultProps = {
  iconPosition: undefined,
  className: '',
  inputClassName: '',
  iconClassName: ''
}

export default InputWithIcon
