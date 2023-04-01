// Recursive

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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = null,
    newTree = null;

  const helper = (node) => {
    if (!node) return;
    // left
    helper(node.left);

    // read/visit
    // while reading/visiting the node update newRoot/newTree
    if (!newRoot) {
      newRoot = newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
      // set left to null to avoid duplication & to create skewed tree
      node.left = null;
    }

    // right
    helper(node.right);
  };

  helper(root);
  return newRoot;
};
