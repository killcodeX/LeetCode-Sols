/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let hash = {};
  let longest = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (!hash[n - 1]) {
      curr = 0;
      while (hash[n + curr]) curr++;
    }
    longest = Math.max(longest, curr);
  }

  return longest;
};
