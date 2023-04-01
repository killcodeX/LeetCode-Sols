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
 * @return {number}
 */

var deepestLeavesSum = function (root) {
  let deepest = 0;
  let sum = 0;

  deepestLeaves = (node, depth) => {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      if (deepest == depth) {
        sum += node.val;
      } else if (depth > deepest) {
        deepest = depth;
        sum = node.val;
      }
    }

    deepestLeaves(node.left, depth + 1);
    deepestLeaves(node.right, depth + 1);
  };

  deepestLeaves(root, 0);
  return sum;
};
