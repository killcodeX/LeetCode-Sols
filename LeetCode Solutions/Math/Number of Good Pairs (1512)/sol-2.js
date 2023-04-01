// Optimized Sol

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  let guests = {};

  for (let i = 0; i < nums.length; i++) {
    if (!guests[nums[i]]) {
      guests[nums[i]] = 1;
    } else {
      count += guests[nums[i]];
      guests[nums[i]] += 1;
    }
  }

  return count;
};
