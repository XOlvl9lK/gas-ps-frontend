import React from 'react'
import { useSideBarState } from './hooks/useSideBarState'
import styles from './sideBar.module.scss'
import NodeElement from './components/NodeElement'
import SideBarFooter from './components/SideBarFooter'
import { NavLink } from 'react-router-dom'
import { Tree } from './hooks/useEvaluateTree'

const getNode = (tree: Tree[]): JSX.Element[] => {
  return tree.map(({ node, childes, layer}) => {
    return (
      <>
        <NodeElement key={node.id + node.type + Math.random()} node={node} layer={layer} />
        {childes?.length && getNode(childes)}
      </>
    )
  })
}

const SideBar = () => {
  const {
    tree
  } = useSideBarState()

  return (
    <div className={styles.sideBar}>
      <NavLink to={'/'} className={styles.title}><h1>Оглавление</h1></NavLink>
      <div className={styles.nodesWrapper}>
        {getNode(tree)}
      </div>
      <SideBarFooter />
    </div>
  )
}

export default SideBar