import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { useEffect } from 'react'
import {
  fetchNodesAction
} from '../store/saga'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { useEvaluateTree } from './useEvaluateTree'

export const useSideBarState = () => {
  const dispatch = useAppDispatch()
  const { nodes, isNodesLoading } = useAppSelector(state => state.sideBarReducer)

  useEffect(() => {
    dispatch(fetchNodesAction())
  }, [])

  const tree = useEvaluateTree(nodes)

  return {
    isNodesLoading,
    tree,
  }
}