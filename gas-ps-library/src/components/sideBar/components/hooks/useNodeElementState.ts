import { SyntheticEvent, useCallback, useState } from 'react'
import { Node } from '../../store/slice'
import { deleteNodeAction, updateNodeAction } from '../../store/saga'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import { useOnChange } from '../../../../common/hooks/useOnChange'
import { useToggle } from '../../../../common/hooks/useToggle'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'

export const useNodeElementState = ({ id, type, title: nodeTitle, parentId, chapterId }: Node) => {
  const dispatch = useAppDispatch();
  const [title, onChangeTitle] = useOnChange(nodeTitle);
  const [readOnly, onEditNode] = useToggle(true);
  const [savedTitle,] = useState(title);

  const onDeleteNode = useCallback((event: SyntheticEvent) => {
    dispatch(deleteNodeAction({ id, type }))
  }, [id])

  const onRollbackChanges = useCallback((event: SyntheticEvent) => {
    onChangeTitle({ target: { value: savedTitle }})
    !readOnly && onEditNode(event)
  }, [readOnly, savedTitle])

  const onSaveNode = useCallback((event: SyntheticEvent) => {
    dispatch(updateNodeAction({ id, type, title, parentId, chapterId }))
    !readOnly && onEditNode(event)
  }, [readOnly, title])

  return {
    onDeleteNode,
    title,
    onChangeTitle,
    onEditNode,
    readOnly,
    onRollbackChanges,
    onSaveNode
  }
}