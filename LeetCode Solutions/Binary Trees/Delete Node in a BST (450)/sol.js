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
 * @param {number} key
 * @return {TreeNode}
 */

function findMin(node) {
  while (node.left != null) {
    node = node.left;
  }

  return node;
}

function removeNode(node, val) {
  if (!node) {
    return null;
  }

  if (node.val > val) {
    node.left = removeNode(node.left, val);
  } else if (node.val < val) {
    node.right = removeNode(node.right, val);
  } else {
    //console.log("fonud this little pice of shit", node.val)
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }

    let minNode = findMin(node.right);
    node.val = minNode.val;
    node.right = removeNode(node.right, node.val);
  }

  return node;
}

var deleteNode = function (root, key) {
  return removeNode(root, key);
};
