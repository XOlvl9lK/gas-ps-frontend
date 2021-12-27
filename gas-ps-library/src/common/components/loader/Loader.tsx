import React from 'react'
import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.ring}>
      Загрузка
      <span/>
    </div>
  )
}

export default Loader