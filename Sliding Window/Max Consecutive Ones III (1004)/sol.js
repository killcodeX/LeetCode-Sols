/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let end = 0;
  let start = 0;

  while (end < nums.length) {
    if (nums[end] == 0) {
      k--;
    }

    if (k < 0) {
      if (nums[start] == 0) {
        k++;
      }
      start++;
    }

    end++;
  }

  return end - start;
};
