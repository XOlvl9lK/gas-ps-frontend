import { useNavigate, useParams } from 'react-router'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { articleSelector } from '../store/slice'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { fetchArticleAction, updateArticleAction } from '../store/saga'

export const useArticleState = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { article, isArticleLoading } = useAppSelector(articleSelector(id))
  const [content, setContent] = useState('')
  const [readOnly, setReadOnly] = useState(true)
  const [savedChanges, setSavedChanges] = useState('')
  const editor = useRef(null)


  useEffect(() => {
    if (!article && id) {
      dispatch(fetchArticleAction(Number(id)))
    } else {
      setContent(article?.content || '')
      setSavedChanges(article?.content || '')
    }
  }, [article, id])

  const config = useMemo(() => {
    return readOnly ? {
      readonly: true, // all options from https://xdsoft.net/jodit/doc/
      buttons: []
    } : {
      readonly: false,
      disablePlugins: 'about',
      language: 'ru'
    }
  }, [readOnly])

  const onSaveArticle = useCallback(() => {
    if (article && content !== savedChanges) {
      dispatch(updateArticleAction({ ...article, content }))
    }
  }, [content, article])

  const onReadOnlyChange = useCallback(() => {
    setReadOnly(!readOnly)
  }, [readOnly])

  const onRollbackChanges = useCallback(() => {
    setContent(savedChanges)
  }, [savedChanges])

  useEffect(() => {
    setReadOnly(true)
  }, [id])

  return {
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
  }
}