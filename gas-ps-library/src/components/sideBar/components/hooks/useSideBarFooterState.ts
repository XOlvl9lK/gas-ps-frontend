import { useOnChange } from '../../../../common/hooks/useOnChange'
import { chapterOptionsSelector, NodeType } from '../../store/slice'
import { useCallback } from 'react'
import { createNodeAction } from '../../store/saga'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'

export const useSideBarFooterState = () => {
  const dispatch = useAppDispatch()
  const [type, onTypeChange] = useOnChange<NodeType>('article')
  const [chapter, onChapterChange] = useOnChange<number>(0)
  const [title, onTitleChange] = useOnChange('')
  const chapterOptions = useAppSelector(chapterOptionsSelector)

  const onCreateNode = useCallback(async () => {
    if (title) {
      dispatch(createNodeAction({ title, type, ...(chapter ? { chapterId: Number(chapter), parentId: Number(chapter) } : {})}))
      onTitleChange({ target: { value: '' }})
    }
  }, [title, chapter, type])

  return {
    onTypeChange,
    title,
    onTitleChange,
    onCreateNode,
    chapterOptions,
    onChapterChange,
  }
}