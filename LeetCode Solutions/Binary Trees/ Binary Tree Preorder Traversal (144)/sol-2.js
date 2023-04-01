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
var preorderTraversal = function (root) {
  let result = [];
  // Recursive function to traverse through subtrees
  preorder(root, result);
  return result;
};
const preorder = (node, result) => {
  if (!node) return null;
  // Visit node
  result.push(node.val);
  // Traverse through left subtree
  preorder(node.left, result);
  // Traverse through right subtree
  preorder(node.right, result);
};
