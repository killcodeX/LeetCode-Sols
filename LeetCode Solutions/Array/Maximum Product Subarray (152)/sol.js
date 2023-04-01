/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let localMax = 0;
  let globalMax = nums[0];

  for (let i = 0; i < nums.length; i++) {
    left = (left == 0 ? 1 : left) * nums[i];
    right = (right == 0 ? 1 : right) * nums[n - 1 - i];

    localMax = Math.max(left, right);
    globalMax = Math.max(globalMax, localMax);
  }

  return globalMax;
};

