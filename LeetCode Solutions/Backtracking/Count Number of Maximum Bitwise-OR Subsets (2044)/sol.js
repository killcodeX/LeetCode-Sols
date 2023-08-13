/**
 * @param {number[]} nums
 * @return {number}
 */
function recur(i, bitOR, nums, res, curr) {
  if (i >= nums.length) {
    if (curr == bitOR) res[0]++;
    return;
  }
  recur(i + 1, bitOR, nums, res, curr | nums[i]);
  recur(i + 1, bitOR, nums, res, curr);
}
var countMaxOrSubsets = function (nums) {
  let res = [0];
  let bitOR = 0;
  for (let i = 0; i < nums.length; i++) bitOR |= nums[i];
  recur(0, bitOR, nums, res, 0);
  return res[0];
};
