/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      //console.log('At inner loop --->',left, right, sum)
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }

    //console.log('At outer loop --->',left, right, sum)
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};
