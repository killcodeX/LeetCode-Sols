/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function atMost(nums, k) {
  let start = 0;
  let end = 0;
  let nice = 0;

  while (end < nums.length) {
    if (nums[end] % 2 != 0) {
      k--;
    }

    while (k < 0) {
      //k += nums[start++] % 2;
      if (nums[start] % 2 != 0) {
        k++;
      }
      start++;
    }
    nice += end - start + 1;
    end++;
  }

  return nice;
}

var numberOfSubarrays = function (nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
};
