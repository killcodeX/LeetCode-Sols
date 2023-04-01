/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;
  let pairs = 0;
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  //console.log(Object.keys(obj))

  for (let num of Object.keys(obj)) {
    if (k == 0) {
      if (obj[num] >= 2) pairs++;
    } else {
      if (obj[num - k]) pairs++;
    }
  }

  return pairs;
};
