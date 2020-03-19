import React from 'react'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import styles from './TypographyStory.module.scss'

const BOLDNESS = {
  BOLD: 'bold',
  SEMIBOLD: 'semibold',
  MEDIUM: 'medium',
  REGULAR: 'regular'
}

const nodes = [
  {
    type: 'h1',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'h1',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'h2',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'h2',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'h3',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'h3',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'h4',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'h4',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'body-1',
    boldness: BOLDNESS.SEMIBOLD
  },
  {
    type: 'body-1',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'body-2',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'body-2',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'body-3',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'body-3',
    boldness: BOLDNESS.MEDIUM
  },
  {
    type: 'body-3',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'caption',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'caption',
    boldness: BOLDNESS.SEMIBOLD
  },
  {
    type: 'caption',
    boldness: BOLDNESS.REGULAR
  },
  {
    type: 'tiny',
    boldness: BOLDNESS.BOLD
  },
  {
    type: 'tiny',
    boldness: BOLDNESS.SEMIBOLD
  }
]

storiesOf('Typography', module).add('Primary (Proxima Nova)', () => (
  <div>
    {nodes.map(({ type, boldness }, idx) => (
      <div key={idx} className={styles.line}>
        <span className={cx(styles[type], styles[boldness])}>
          {type} / {boldness}
        </span>
      </div>
    ))}
  </div>
))
