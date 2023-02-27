/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let countOdd = 0;
    let countEven = 0;
    for (let j = 0; j < nums.length; j++) {
      if ((1 << i) & nums[j]) {
        countOdd++;
      } else {
        countEven++;
      }
    }

    if (countOdd % 3) {
      ans = ans | (1 << i);
    }
  }

  return ans;
};
