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
var postorderTraversal = function (root) {
  let stack = [];
  let output = [];
  let curr = root;

  while (curr != null || stack.length != 0) {
    if (curr != null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let temp = stack[stack.length - 1].right;
      if (temp == null) {
        temp = stack.pop();
        output.push(temp.val);
        while (stack.length != 0 && temp == stack[stack.length - 1].right) {
          temp = stack.pop();
          output.push(temp.val);
        }
      } else {
        curr = temp;
      }
    }
  }

  return output;
};
