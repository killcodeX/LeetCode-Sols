/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let sum = nums[0] + nums[1] + nums[nums.length - 1];
  let clos = sum;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || nums[i] != nums[i - 1]) {
      let low = i + 1;
      let high = nums.length - 1;
      while (low < high) {
        sum = nums[i] + nums[low] + nums[high];
        if (sum < target) {
          //move closer to target sum.
          while (low < high && nums[low] == nums[low + 1]) {
            low++;
          }
          low++;
        } else if (sum > target) {
          //move closer to target sum.
          while (low < high && nums[high] == nums[high - 1]) {
            high--;
          }
          high--;
        } else {
          return sum;
        }
        //update the closest sum if needed.
        if (Math.abs(target - sum) < Math.abs(target - clos)) {
          clos = sum;
        }
      }
    }
  }

  return clos;
};
