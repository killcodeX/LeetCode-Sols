var nextPermutation = function (nums) {
  let pivot = -1;

  //find the pivot element
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }

  //if no pivot reverse the array
  if (pivot === -1) {
    nums.reverse();
    return;
  }

  //find the num which is greater than pivot number from rev order
  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[pivot] < nums[i]) {
      let curr = nums[pivot];
      nums[pivot] = nums[i];
      nums[i] = curr;
      break;
    }
  }

  // reversion rest of the number from pivot to rest
  let left = pivot + 1;
  let right = nums.length - 1;

  while (left <= right) {
    let curr = nums[left];
    nums[left] = nums[right];
    nums[right] = curr;

    left++;
    right--;
  }
};
