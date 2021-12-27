import { takeEvery, put, call, all, takeLeading } from 'redux-saga/effects'
import { ChaptersApi } from '../../../api/chaptersApi'
import {
  addNode,
  Chapter,
  setNodes,
  setIsNodesLoading, deleteNode,
  Node, updateNode, NodeType
} from './slice'
import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { NodesApi } from '../../../api/nodesApi'
import { ArticleApi } from '../../../api/articleApi'
import { Article } from '../../article/store/slice'

export const fetchNodesAction = createAction('nodes/fetch')
export const createNodeAction = createAction<Omit<Node, 'id'>>(
  'nodes/create')
export const deleteNodeAction = createAction<{ id: number, type: NodeType }>('nodes/create')
export const updateNodeAction = createAction<Node>('nodes/update')

export function* fetchNodesWorker() {
  try {
    yield put(setIsNodesLoading(true))
    const nodes: Node[] = yield call(NodesApi.getAll)
    yield put(setNodes(nodes))
    yield put(setIsNodesLoading(false))
  } catch (e) {
    console.log(e)
  }
}

export function* createNodeWorker({ payload }: PayloadAction<Omit<Node, 'id'>>) {
  try {
    if (payload.type === 'chapter') {
      const chapter: Chapter = yield call(ChaptersApi.create, payload)
      yield put(addNode({ ...chapter, type: 'chapter' }))
    } else {
      const article: Article = yield call(ArticleApi.create, payload)
      yield put(addNode({ ...article, type: 'article' }))
    }
  } catch (e) {
    console.log(e)
  }
}

export function* deleteNodeWorker({ payload }: PayloadAction<{ id: number, type: NodeType }>) {
  try {
    yield put(deleteNode(payload.id))
    if (payload.type === 'chapter') {
      yield call(ChaptersApi.delete, payload.id)
    } else {
      yield call(ArticleApi.delete, payload.id)
    }
  } catch (e) {
    console.log(e)
  }
}

export function* updateNodeWorker({ payload }: PayloadAction<Node>) {
  try {
    yield put(updateNode(payload))
    if (payload.type === 'chapter') {
      yield call(ChaptersApi.update, payload)
    } else {
      yield call(ArticleApi.update, payload)
    }
  } catch (e) {
    console.log(e)
  }
}

export function* nodesWatcher() {
  yield all([
    takeLeading(fetchNodesAction, fetchNodesWorker),
    takeLeading(createNodeAction, createNodeWorker),
    takeLeading(deleteNodeAction, deleteNodeWorker),
    takeLeading(updateNodeAction, updateNodeWorker),
  ])
}
