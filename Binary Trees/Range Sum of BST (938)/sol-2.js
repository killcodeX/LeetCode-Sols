var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};
