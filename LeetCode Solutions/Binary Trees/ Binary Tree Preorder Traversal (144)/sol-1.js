// Iterative Method

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
  let output = [];

  if (!root) {
    return output;
  }

  let stack = [];

  stack.push(root);

  while (stack.length != 0) {
    let curr = stack.pop();
    output.push(curr.val);

    if (curr.right != null) {
      stack.push(curr.right);
    }

    if (curr.left != null) {
      stack.push(curr.left);
    }
  }

  return output;
};
