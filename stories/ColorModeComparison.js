import React from 'react'
import styles from './ColorModeComparison.module.scss'

const ColorModeComparison = ({ children }) => {
  const elements = children.reduce
    ? children.reduce((acc, child) => {
      return [...acc, child, <div className={styles.br} />]
    }, [])
    : children

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <h2 className={styles.title}>Day mode</h2>
        {elements}
      </div>
      <div className={`night-mode ${styles.column}`}>
        <h2 className={styles.title}>Night mode</h2>
        {elements}
      </div>
    </div>
  )
}

export default ColorModeComparison
