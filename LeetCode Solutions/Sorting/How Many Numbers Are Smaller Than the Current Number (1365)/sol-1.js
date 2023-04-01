// Brute force Method

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    let smaller = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        smaller++;
      }
    }
    stack.push(smaller);
  }

  return stack;
};
