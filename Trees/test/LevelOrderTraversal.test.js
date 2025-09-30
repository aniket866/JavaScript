import { Node, levelOrderTraversal } from "../LevelOrderTraversal.js";

describe("Level Order Traversal", () => {
  test("should return empty array for empty tree", () => {
    expect(levelOrderTraversal(null)).toEqual([]);
  });

  test("should return single node tree", () => {
    const root = new Node(1);
    expect(levelOrderTraversal(root)).toEqual([[1]]);
  });

  test("should return correct level order for complete tree", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

    expect(levelOrderTraversal(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  test("should handle unbalanced tree", () => {
    const root = new Node(1);
    root.left = new Node(2);
    root.left.left = new Node(3);

    expect(levelOrderTraversal(root)).toEqual([[1], [2], [3]]);
  });
});
