/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let pairs = 0;
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  //console.log(obj)
  for (let i = 0; i < nums.length; i++) {
    let y = nums[i] - k;
    console.log(y);
    if (obj[y]) {
      pairs += obj[y];
    }
  }

  return pairs;
};
