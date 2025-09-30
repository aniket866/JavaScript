export class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export class BinaryTree {
  constructor() {
    this.root = null
  }

  morrisTraversal() {
    const traversal = []
    let current = this.root

    while (current !== null) {
      if (current.left === null) {
        traversal.push(current.data)
        current = current.right
      } else {
        let predecessor = current.left
        while (predecessor.right !== null && predecessor.right !== current) {
          predecessor = predecessor.right
        }

        if (predecessor.right === null) {
          predecessor.right = current
          current = current.left
        } else {
          predecessor.right = null
          traversal.push(current.data)
          current = current.right
        }
      }
    }

    return traversal
  }
}
