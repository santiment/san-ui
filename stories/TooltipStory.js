import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from '../src/Tooltip'
import Button from '../src/Button'
import Panel from '../src/Panel/Panel'
import Icon from '../src/Icon'
import Label from '../src/Label'

const Example = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
      }}
    >
      <div
        className='top'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
      <div
        className='mid'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
      <div
        className='bottom'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props} />
        <Tooltip {...props} />
        <Tooltip {...props} />
      </div>
    </div>
  )
}

storiesOf('Tooltip', module)
  .addParameters({
    info: {
      propTables: [Tooltip],
      text: `
In order for \`Tooltip\` to work, component hierarchy should look like this:

   **OK**: Trigger(DOM Element)

   **OK**: Trigger(Custom Component) -> DOM Element

   **WRONG**: Trigger(Custom Component) -> Custom Component -> DOM Element
      `,
      propTablesExclude: [Example]
    }
  })
  .add('align: "top", on: "hover"', () => (
    <Example position='top' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "top", on: "click"', () => (
    <Example on='click' position='top' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "right"', () => (
    <Example position='right' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "bottom"', () => (
    <Example position='bottom' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('align: "left"', () => (
    <Example position='left' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Button, align: "left"', () => (
    <Example
      forwardedRefName='innerRef'
      position='left'
      trigger={<Button as='span'>trigger</Button>}
    >
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Panel, align: "left"', () => (
    <Example position='left' trigger={<Panel>123</Panel>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Label, align: "left"', () => (
    <Example position='left' trigger={<Label>123</Label>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Icon, align: "left"', () => (
    <Example position='left' trigger={<Icon type='cloud-big' />}>
      test afisudhfoaidsufh content
    </Example>
  ))
