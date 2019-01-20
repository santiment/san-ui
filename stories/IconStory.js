import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../src/Icon'

storiesOf('Icon', module).add('All', () => (
  <div>
    <Icon type='profile' fill='#000' />
    <Icon type='profile-round' fill='#000' />
    <Icon type='help-round' fill='#000' />
    <Icon type='checkmark' fill='#000' />
  </div>
))
