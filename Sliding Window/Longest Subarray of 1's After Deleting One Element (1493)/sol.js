/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let end = 0;
  let k = 1;
  let max = 0;

  while (end < nums.length) {
    if (nums[end] == 0) {
      k--;
    }

    while (k < 0) {
      //console.log('inside of inner loop --',{start, end, k})
      if (nums[start] == 0) {
        k++;
      }
      start++;
    }
    max = Math.max(max, end - start);
    //console.log('end of loop --',{start, end, k})
    end++;
  }

  return max;
};
