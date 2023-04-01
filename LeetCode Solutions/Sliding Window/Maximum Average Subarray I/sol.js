/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    //console.log(arr[i])
    sum += nums[i];
  }
  let max = sum;
  //console.log('first sum --', sum)

  for (let i = 0; i < nums.length - k; i++) {
    //console.log(arr[i],arr[i+k])
    sum = sum - nums[i] + nums[i + k];
    max = Math.max(max, sum);
  }
  return max / k;
};
