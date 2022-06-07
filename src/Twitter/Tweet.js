import React from 'react'
import cx from 'classnames'
import styles from './Tweet.module.scss'

const Tweet = ({ displayName, content, handle, id, avatar }) => (
  <a
    target='_blank'
    rel='noopener noreferer'
    href={`https://twitter.com/${handle}/status/${id}`}
    aria-label='Opens Tweet on Twitter in a new tab'
    className={cx('mrg--r mrg-xxl', styles.wrapper)}
  >
    <article className={cx(styles.content, 'column')}>
      <header className={cx(styles.header, 'row mrg--b mrg-xl')}>
        <img
          src={avatar}
          alt=''
          className={cx(styles.avatar, 'mrg--r mrg-l')}
        />
        <div>
          <div className={cx(styles.displayName, 'body-1 txt-b')}>
            {displayName}
          </div>
          <div className={cx(styles.handle, 'body-3')}>@{handle}</div>
        </div>
        <svg viewBox='0 0 24 24' width='24' className='mrg--l mrg-a'>
          <path
            fill='rgb(29,161,242)'
            d='M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z'
          />
        </svg>
      </header>
      <div className={styles.body}>{content}</div>
    </article>
  </a>
)

export default Tweet
