import { BinaryTree, Node } from '../Trees/MorrisTraversal.js'

describe('Morris Inorder Tree Traversal', () => {
  const binaryTree = new BinaryTree()

  const root = new Node(7)
  root.left = new Node(5)
  root.right = new Node(8)
  root.left.left = new Node(3)
  root.left.right = new Node(6)
  root.left.right.right = new Node(9)
  binaryTree.root = root

  it('Binary tree - Empty case', () => {
    const emptyTree = new BinaryTree()
    expect(emptyTree.morrisTraversal()).toStrictEqual([])
  })

  it('Binary tree - Morris inorder traversal', () => {
    const traversal = binaryTree.morrisTraversal()
    expect(traversal).toStrictEqual([3, 5, 6, 9, 7, 8])
  })
})
