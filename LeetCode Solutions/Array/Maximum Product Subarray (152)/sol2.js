/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0]; // for max positive product [2,3] => 2*3 = 6
  let min = nums[0]; // for max negative product [-2,-3] => -2*-3 = 6
  let res = nums[0]; // final answer

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == 0) {
      max = 1;
      min = 1;
    }

    let temp1 = max * nums[i];
    let temp2 = min * nums[i];

    max = Math.max(temp1, temp2, nums[i]);
    min = Math.min(temp1, temp2, nums[i]);

    res = Math.max(res, max);
  }

  return res;
};
