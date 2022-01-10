import React from 'react'
import styles from './header.module.scss'
import Select from './components/Select'
import { useHeaderState } from './hooks/useHeaderState'

const Header = () => {
  const {
    articles
  } = useHeaderState()

  return (
    <header className={styles.header}>
      <h2>
        Header
      </h2>
      <Select options={articles} />
    </header>
  )
}

export default Header