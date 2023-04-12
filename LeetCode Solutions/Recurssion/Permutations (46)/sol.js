/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function recur(nums, arr, ans, freq) {
  if (arr.length == nums.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      arr.push(nums[i]);
      recur(nums, arr, ans, freq);
      arr.pop();
      freq[i] = false;
    }
  }
}

var permute = function (nums) {
  let ans = [];
  let arr = [];
  let freq = new Array(nums.length).fill(false);
  recur(nums, arr, ans, freq);
  return ans;
};
