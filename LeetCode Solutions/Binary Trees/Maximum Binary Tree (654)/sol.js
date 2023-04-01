/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function maxBinaryTree(node, nums) {
  if (nums && nums.length) {
    let max = Math.max(...nums);
    let maxIndex = nums.findIndex((num) => num === max);
    let left = nums.slice(0, maxIndex);
    let right = nums.slice(maxIndex + 1);
    let newNode = new TreeNode(max);
    newNode.left = maxBinaryTree(newNode.left, left);
    newNode.right = maxBinaryTree(newNode.right, right);
    return newNode;
  }

  return null;
}
var constructMaximumBinaryTree = function (nums) {
  let root = null;
  root = maxBinaryTree(root, nums);
  return root;
};
