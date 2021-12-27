import React, { FC } from 'react'
import styles from './wrapper.module.scss'

const Wrapper: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Wrapper