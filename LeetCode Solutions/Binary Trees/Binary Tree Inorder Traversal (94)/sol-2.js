// Recursion Method

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // In-Order Traversal ->
  //  1. Recursively traverse through the left subtree
  //  2. Visit current node
  //  3. Recursively traverse through the right subtree

  // Initialize array of values
  let result = [];

  // Recursive function to traverse through subtrees
  inorder(root, result);

  return result;
};

const inorder = (node, result) => {
  if (!node) return null;
  // Traverse through left subtree
  inorder(node.left, result);
  // Visit node
  result.push(node.val);
  // Traverse through right subtree
  inorder(node.right, result);
};
