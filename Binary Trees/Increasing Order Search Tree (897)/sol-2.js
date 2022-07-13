// iterative

var increasingBST = function (root) {
  if (!root) return null;
  let stack = [],
    newRoot = null,
    newTree = null;

  while (root) {
    // left
    while (root) {
      stack.push(root);
      root = root.left;
    }
    while (stack.length > 0) {
      // read/visit
      let node = stack.pop();
      if (!newRoot) {
        newRoot = newTree = node;
      } else {
        newTree.right = node;
        newTree = newTree.right;
      }
      node.left = null;
      // right
      if (node.right) {
        root = node.right;
        break;
      }
    }
  }
  return newRoot;
};
