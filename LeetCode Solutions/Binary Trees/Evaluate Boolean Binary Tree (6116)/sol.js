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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  if (root.val == "0") return false;
  if (root.val == "1") return true;

  if (!root.left && !root.right) {
    return root;
  }

  let leftSubtree = evaluateTree(root.left);
  let rightSubtree = evaluateTree(root.right);

  if (root.val == "2") {
    return leftSubtree || rightSubtree;
  }

  if (root.val == "3") {
    return leftSubtree && rightSubtree;
  }
};
