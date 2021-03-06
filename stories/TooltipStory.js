import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tooltip from '../src/Tooltip'
import Button from '../src/Button'
import Panel from '../src/Panel/Panel'
import Icon from '../src/Icon'
import Label from '../src/Label'
import styles from './TooltipStory.module.scss'

const Example = ({ children, ...props }) => {
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
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
      </div>
      <div
        className='mid'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
      </div>
      <div
        className='dark'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip
          withArrow
          className={styles.dark}
          arrowClassName={styles.arrow}
          {...props}
        >
          {children}
        </Tooltip>
        <Tooltip
          withArrow
          className={styles.dark}
          arrowClassName={styles.arrow}
          {...props}
        >
          {children}
        </Tooltip>
        <Tooltip
          withArrow
          className={styles.dark}
          arrowClassName={styles.arrow}
          {...props}
        >
          {children}
        </Tooltip>
      </div>
      <div
        className='bottom'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
        <Tooltip {...props}>
          <Panel padding>{children}</Panel>
        </Tooltip>
      </div>
    </div>
  )
}

const ExampleAlign = props => (
  <div style={{ padding: 200 }}>
    <Tooltip {...props} align='start'>
      <Panel padding>align="start"</Panel>
    </Tooltip>
    <br />
    <br />
    <Tooltip {...props}>
      <Panel padding>align="center" (default)</Panel>
    </Tooltip>
    <br />
    <br />
    <Tooltip {...props} align='end'>
      <Panel padding>align="end"</Panel>
    </Tooltip>
    <br />
    <br />
    <hr />
    <br />
    <Tooltip
      {...props}
      withArrow
      className={styles.dark}
      arrowClassName={styles.arrow}
      align='start'
    >
      align="start" and Some text goes here
    </Tooltip>
    <br />
    <br />
    <Tooltip
      withArrow
      className={styles.dark}
      arrowClassName={styles.arrow}
      {...props}
    >
      align="center" (default) and Some text goes here
    </Tooltip>
    <br />
    <br />
    <Tooltip
      withArrow
      className={styles.dark}
      arrowClassName={styles.arrow}
      {...props}
      align='end'
    >
      align="end" and Some text goes here
    </Tooltip>
  </div>
)

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
  .add('position: "top", on: "hover", trigger event handler', () => (
    <Example
      position='top'
      trigger={
        <span
          onMouseEnter={action('On trigger mouse enter')}
          onMouseLeave={action('On trigger mouse leave')}
        >
          trigger
        </span>
      }
    >
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('position: "top", on: "hover"', () => (
    <Example position='top' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('position: "top", on: "click"', () => (
    <Example on='click' position='top' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))

  .add('position: "top", "align" changed', () => (
    <ExampleAlign position='top' trigger={<span>trigger</span>} />
  ))

  .add('position: "right"', () => (
    <Example position='right' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))

  .add('position: "right", "align" changed', () => (
    <ExampleAlign position='right' trigger={<span>trigger</span>} />
  ))
  .add('position: "bottom"', () => (
    <Example position='bottom' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))

  .add('position: "bottom", "align" changed', () => (
    <ExampleAlign position='bottom' trigger={<span>trigger</span>} />
  ))

  .add('position: "left"', () => (
    <Example position='left' trigger={<span>trigger</span>}>
      test afisudhfoaidsufh content
    </Example>
  ))

  .add('position: "left", "align" changed', () => (
    <ExampleAlign position='left' trigger={<span>trigger</span>} />
  ))

  .add('Custom Component trigger: Button, position: "left"', () => (
    <Example
      forwardedRefName='innerRef'
      position='left'
      passOpenStateAs='isActive'
      trigger={
        <Button variant='flat' as='span'>
          trigger
        </Button>
      }
    >
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Panel, position: "left"', () => (
    <Example position='left' trigger={<Panel>123</Panel>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Label, position: "left"', () => (
    <Example position='left' trigger={<Label>123</Label>}>
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Custom Component trigger: Icon, position: "left"', () => (
    <Example
      position='left'
      onClose={() => console.log('closed')}
      onOpen={() => console.log('opened')}
      trigger={<Icon type='cloud-big' />}
    >
      test afisudhfoaidsufh content
    </Example>
  ))
  .add('Tooltip with CSS rendering', () => (
    <Example
      as='div'
      shown={true}
      position='right'
      trigger={<Icon type='cloud-big' />}
    >
      test afisudhfoaidsufh content
    </Example>
  ))
