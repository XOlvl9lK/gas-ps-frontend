import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article } from '../../article/store/slice'
import { RootState } from '../../../store/store'

export interface Chapter {
  id: number;
  title: string;
  parentId?: number | null;
}

export type NodeType = 'chapter' | 'article'

export interface Node extends Chapter, Article {
  type: NodeType
}

interface SideBarState {
  nodes: Node[]
  isNodesLoading: boolean
}

const initialState: SideBarState = {
  nodes: [],
  isNodesLoading: false
}

export const chapterOptionsSelector = (state: RootState) => {
  const chapters = state.sideBarReducer.nodes.filter(n => n.type === 'chapter')
  return chapters.map(c => ({ id: c.id, title: c.title }))
}

const sideBarSlice = createSlice({
  name: 'sideBarSlice',
  initialState,
  reducers: {
    setNodes(
      state: SideBarState,
      { payload: nodes }: PayloadAction<Node[]>
    ) {
      state.nodes = nodes
    },
    addNode(
      state: SideBarState,
      { payload: node }: PayloadAction<Node>
    ) {
      state.nodes = [...state.nodes, node]
    },
    setIsNodesLoading(
      state: SideBarState,
      { payload: isNodesLoading }: PayloadAction<boolean>
    ) {
      state.isNodesLoading = isNodesLoading
    },
    deleteNode(
      state: SideBarState,
      { payload: id }: PayloadAction<number>
    ) {
      state.nodes = state.nodes.filter(node => node.id !== id)
    },
    updateNode(
      state: SideBarState,
      { payload: node }: PayloadAction<Node>
    ) {
      state.nodes = state.nodes.map(n => {
        if (n.id === node.id) {
          n = node
        }
        return n
      })
    }
  }
})

export const {
  setIsNodesLoading,
  setNodes,
  addNode,
  deleteNode,
  updateNode
} = sideBarSlice.actions

export const sideBarReducer = sideBarSlice.reducer