import React, { useState } from 'react'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import UIToggle from '../src/Toggle'
import Icon from '../src/Icon'
import ColorModeComparison from './ColorModeComparison'
import styles from './ToggleStory.module.scss'

function Toggle (props) {
  const [isActive, setIsActive] = useState(props.isActive)

  return (
    <UIToggle
      {...props}
      isActive={isActive}
      onClick={() => (props.disabled ? {} : setIsActive(!isActive))}
    />
  )
}

storiesOf('Toggle', module).add('Simple', () => (
  <div>
    <ColorModeComparison>
      <Toggle />
      <Toggle isActive />
      <Toggle isActive disabled />
      <Toggle disabled />
      <Toggle
        isActive
        IconActive={({ className }) => (
          <Icon type='eye-small' className={cx(className, styles.icon)} />
        )}
        IconNotActive={props => <Icon type='eye-disabled-small' {...props} />}
        className={styles.toggle}
      />
    </ColorModeComparison>
  </div>
))
