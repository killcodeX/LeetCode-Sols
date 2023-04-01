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
var postorderTraversal = function (root) {
  // Initialize array of values
  let result = [];

  // Recursive function to traverse through subtrees
  postorder(root, result);

  return result;
};

const postorder = (node, result) => {
  if (!node) return null;
  // Traverse through left subtree
  postorder(node.left, result);
  // Traverse through right subtree
  postorder(node.right, result); 
  // Visit node
  result.push(node.val); 
};
