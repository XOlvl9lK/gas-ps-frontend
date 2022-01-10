import React, { FC } from 'react'
import { Node } from '../store/slice'
import styles from './nodeElement.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faBook, faTimes, faCog, faCheck, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useNodeElementState } from './hooks/useNodeElementState'

interface NodeElementProps {
  node: Node,
  layer: number
}

const setActiveLink = ({ isActive }: { isActive: boolean }) => isActive ? styles.nodeActive : styles.node;

const NodeElement: FC<NodeElementProps> = React.memo(({ node, layer}) => {
  const {
    onDeleteNode,
    title,
    onChangeTitle,
    onEditNode,
    readOnly,
    onRollbackChanges,
    onSaveNode
  } = useNodeElementState(node)

  return (
    <>
      {node.type === 'article' ?
        <NavLink draggable={false} className={setActiveLink} style={{ paddingLeft: `${layer * 12}px` }} to={`article/${node.id}`}>
          <div className={styles.nodeTitle}>
            <FontAwesomeIcon icon={faNewspaper} className={styles.iconArticle}/>
            <input type='text' value={title} onChange={onChangeTitle} disabled={readOnly}/>
          </div>
          <div className={styles.icons}>
            {readOnly ?
              <FontAwesomeIcon icon={faCog} onClick={onEditNode} className={styles.iconCog}/>
              :
              <>
                <FontAwesomeIcon icon={faCaretLeft} onClick={onRollbackChanges} className={styles.iconArrow}/>
                <FontAwesomeIcon icon={faCheck} onClick={onSaveNode} className={styles.iconCheck}/>
              </>
            }
            <FontAwesomeIcon icon={faTimes} onClick={onDeleteNode} className={styles.iconCross}/>
          </div>
        </NavLink>
        :
        <div style={{ paddingLeft: `${layer * 12}px` }} className={styles.node}>
          <div className={styles.nodeTitle}>
            <FontAwesomeIcon icon={faBook} className={styles.iconBook}/>
            <input type='text' value={title} onChange={onChangeTitle} disabled={readOnly}/>
          </div>
          <div className={styles.icons}>
            {readOnly ?
              <FontAwesomeIcon icon={faCog} onClick={onEditNode} className={styles.iconCog}/>
              :
              <>
                <FontAwesomeIcon icon={faCaretLeft} onClick={onRollbackChanges} className={styles.iconArrow}/>
                <FontAwesomeIcon icon={faCheck} onClick={onSaveNode} className={styles.iconCheck}/>
              </>
            }
            <FontAwesomeIcon icon={faTimes} onClick={onDeleteNode} className={styles.iconCross}/>
          </div>
        </div>
      }
    </>
  )
})

export default NodeElement