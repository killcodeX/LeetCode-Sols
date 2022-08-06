/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);

    if (target < nums[0] < nums[mid]) {
      // -inf
      left = mid + 1;
    } else if (target >= nums[0] > nums[mid]) {
      // +inf
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      return mid;
    }
  }

  return -1;
};
