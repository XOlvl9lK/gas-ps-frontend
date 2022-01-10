import React from 'react'
import { useArticleState } from './hooks/useArticleState'
import styles from './article.module.scss'
import JoditEditor from 'jodit-react'
import Loader from '../../common/components/loader/Loader'
import './joditStyles.scss'
import { Button } from 'common'

const Article = () => {
  const {
    article,
    isArticleLoading,
    content,
    setContent,
    editor,
    config,
    onSaveArticle,
    onReadOnlyChange,
    readOnly,
    onRollbackChanges
  } = useArticleState()

  if (isArticleLoading) {
    return <Loader />
  }

  return (
    <div className={styles.article}>
      <div className={styles.articleHeader}>
        <h1>{article?.title}</h1>
        <div className={styles.buttons}>
          <Button theme='primary' onClick={onReadOnlyChange} label='Редактировать'/>
          <Button disabled={readOnly} theme='acceptOutlined' onClick={onSaveArticle} label='Сохранить'/>
          <Button disabled={readOnly} theme='dangerOutlined' onClick={onRollbackChanges} label='Отменить изменения'/>
        </div>
      </div>

      <div className={readOnly ? 'textEditorReadonly' : 'textEditor'}>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={newContent => {}}
        />
      </div>
    </div>
  )
}

export default Article