import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from '../src/Panel/Panel'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Panel', module)
  .add('Simple', () => (
    <div>
      <ColorModeComparison>
        <Panel padding />
        <Panel padding>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </Panel>
      </ColorModeComparison>
    </div>
  ))
  .add('Popup', () => (
    <div>
      <ColorModeComparison>
        <Panel padding popup />
        <Panel padding popup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </Panel>
      </ColorModeComparison>
    </div>
  ))
