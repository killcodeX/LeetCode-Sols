var maxSubArray = function (nums) {
  let globalMax = nums[0];
  let localMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);

    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
};
