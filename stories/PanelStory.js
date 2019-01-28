import React from 'react'
import { storiesOf } from '@storybook/react'
import Panel from '../src/Panel/Panel'
import PanelWithHeader from '../src/Panel/PanelWithHeader'
import ColorModeComparison from './ColorModeComparison'

storiesOf('Panel', module)
  .add('Simple', () => (
    <div>
      <ColorModeComparison>
        <Panel padding>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </Panel>
      </ColorModeComparison>
    </div>
  ))
  .add('Modal', () => (
    <div>
      <ColorModeComparison>
        <Panel padding variant='modal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </Panel>
      </ColorModeComparison>
    </div>
  ))
  .add('Tooltip', () => (
    <div>
      <ColorModeComparison>
        <Panel padding variant='tooltip'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </Panel>
      </ColorModeComparison>
    </div>
  ))
  .add('With Header (simple)', () => (
    <div>
      <ColorModeComparison>
        <PanelWithHeader header='Some header text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </PanelWithHeader>
      </ColorModeComparison>
    </div>
  ))
  .add('With Header (Modal)', () => (
    <div>
      <ColorModeComparison>
        <PanelWithHeader variant='modal' header='Some header text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </PanelWithHeader>
      </ColorModeComparison>
    </div>
  ))
  .add('With Header (Tooltip)', () => (
    <div>
      <ColorModeComparison>
        <PanelWithHeader variant='tooltip' header='Some header text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          illum?
        </PanelWithHeader>
      </ColorModeComparison>
    </div>
  ))
