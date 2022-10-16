/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let start = 0;
  let end = 0;
  let queue = [];
  let res = [];

  while (end < nums.length) {
    while (queue.length - 1 >= 0 && nums[end] > queue[queue.length - 1]) {
      queue.pop();
    }

    queue.push(nums[end]);

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 == k) {
      res.push(queue[0]);
      if (nums[start] == queue[0]) {
        queue.shift();
      }
      start++;
      end++;
    }
  }

  return res;
};
