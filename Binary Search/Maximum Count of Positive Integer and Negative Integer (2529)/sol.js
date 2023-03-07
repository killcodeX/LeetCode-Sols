/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let newNum = nums.filter((item) => item != 0);
  let left = 0;
  let right = newNum.length - 1;

  while (left <= right) {
    let mid = Math.trunc(left + (right - left) / 2);

    if (newNum[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  let negCount = left;
  let posCount = newNum.length - negCount;

  return Math.max(posCount, negCount);
};
