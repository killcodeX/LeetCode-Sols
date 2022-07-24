var zeroFilledSubarray = function (nums) {
  let res = 0;
  let currSubSize = 0;

  for (let i = 0, j = 0; i < nums.length; ++i) {
    if (nums[i] == 0) {
      currSubSize++;
    } else if (nums[i] != 0) {
      res += Math.trunc((currSubSize * (currSubSize + 1)) / 2);
      currSubSize = 0;
    }
  }

  res += Math.trunc((currSubSize * (currSubSize + 1)) / 2);

  return res;
};
