import React from 'react'
import FakeTweet from './FakeTweet'
import { tweets } from './data'
import styles from './index.module.scss'

const items = [...tweets, ...tweets]

export default () => (
  <div className={styles.container}>
    <section className={styles.wrapper}>
      <div className={styles.scroller}>
        <div
          className={styles.tweets}
          style={{ '--time': `${tweets.length * 3.5}s` }}
        >
          {items.map(({ displayName, handle, avatar, content, id }, idx) => (
            <FakeTweet
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
  </div>
)
