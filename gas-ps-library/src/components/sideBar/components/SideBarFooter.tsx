import React, { FC } from 'react'
import styles from './sideBarFooter.module.scss'
import { useSideBarFooterState } from './hooks/useSideBarFooterState'

const SideBarFooter: FC = () => {
  const {
    onTitleChange,
    onCreateNode,
    title,
    onTypeChange,
    chapterOptions,
    onChapterChange
  } = useSideBarFooterState()

  return (
    <div className={styles.sideBarFooter}>
      <input type='text' value={title} onChange={onTitleChange} />
      <select name='type' id='type' onChange={onTypeChange}>
        <option value='article'>
          Article
        </option>
        <option value='chapter'>
          Chapter
        </option>
      </select>
      <select name='chapter' id='chapter' onChange={onChapterChange}>
        <option value={0}/>
        {chapterOptions.map(chapter => (
          <option value={chapter.id} key={chapter.id}>{chapter.title}</option>
        ))}
      </select>
      <button onClick={onCreateNode} className={styles.createNodeButton}>
        Create Node
      </button>
    </div>
  )
}

export default SideBarFooter