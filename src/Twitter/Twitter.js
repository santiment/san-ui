import React from 'react'
import cx from 'classnames'
import Tweet from './Tweet'
import { tweets } from './data'
import styles from './Twitter.module.scss'

const items = [...tweets, ...tweets]

const Twitter = () => (
  <section className={styles.wrapper}>
    <div className={cx(styles.title, 'row hv-center h2 txt-b')}>
      See what our users are saying
    </div>
    <div className={styles.scroller}>
      <div
        className={cx(styles.tweets, 'row v-center')}
        style={{ '--time': `${tweets.length * 3.5}s` }}
      >
        {items.map(({ displayName, handle, avatar, content, id }, idx) => (
          <Tweet
            displayName={displayName}
            avatar={avatar}
            handle={handle}
            content={content}
            key={idx}
            id={id}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Twitter
