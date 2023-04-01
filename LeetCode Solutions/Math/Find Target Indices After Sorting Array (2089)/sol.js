// Counting Sort Approach(Best approach for this problem)

/** Counting Sort Approach(Best approach for this problem). In this approach we keep a count of numbers
 * that are smallest than our target(say rank) and second we keep a count how many
 * times does this target appears in given array(say count). Now that we have a count for
 * both the things, we can just loop count Pvarialble. Keep on pushing rank into result array and
 * incrementing rank for next iteration. Time Complexity: O(N) */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let count = 0;
  let rank = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      count++;
    }

    if (nums[i] < target) {
      rank++;
    }
  }

  let stack = [];

  while (count--) {
    stack.push(rank++);
  }

  return stack;
};
