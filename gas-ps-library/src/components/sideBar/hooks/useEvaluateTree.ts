import { Node } from '../store/slice'
import { useMemo } from 'react'

export interface Tree {
  node: Node,
  layer: number,
  childes?: Tree[]
}

const getTree = (tree: Tree[], nodes: Node[]) => {
  tree.forEach(element => {
    const childes = nodes.filter(n => n.parentId === element.node.id || n.chapterId === element.node.id).map(n => ({ node: n, layer: element.layer + 1 }))
    if (childes.length) {
      element.childes = childes
      getTree(element.childes, nodes)
    }
  })
  return tree;
}

export const useEvaluateTree = (nodes: Node[]) => {
  return useMemo(() => {
    const tree: Tree[] = nodes.filter(n => !n.parentId && !n.chapterId).map(n => ({ node: n, layer: 0 }))
    return getTree(tree, nodes)
  }, [nodes]);
}