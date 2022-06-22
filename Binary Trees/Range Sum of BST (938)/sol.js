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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let curr = root;
  let stack = [];
  let output = [];
  let sum = new Set();

  while (curr != null || stack.length != 0) {
    if (curr != null) {
      if (curr.val >= low && curr.val <= high) {
        sum.add(curr.val);
      }
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      output.push(curr.val);
      if (curr.val >= low && curr.val <= high) {
        sum.add(curr.val);
      }
      curr = curr.right;
    }
  }
  let res = 0;
  sum.forEach((item) => (res += item));
  return res;
};
