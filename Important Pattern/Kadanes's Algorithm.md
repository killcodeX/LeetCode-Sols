# Kadanes's Algorithm

- Kadane's Algorithm is generally used in order to find Maximum Subarray Problem! for better [explanation](https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d) check it out.

## Maximum Subarray Problem

The maximum subarray problem is the task of finding the largest possible sum of a contiguous subarray, within a given one-dimensional array A[1…n] of numbers.

For example, for the array given above, the contiguous subarray with the largest sum is [4, -1, 2, 1], with sum 6. We would use this array as our example for the rest of this article. Also, we would assume this array to be zero-indexed, i.e. -2 would be called as the ‘0th’ element of the array and so on. Also, A[i] would represent the value at index i.

Now, we would have a look at a very obvious solution to the given problem.

## Kadane's Algorithm Sol

In this approach, you're checking what the maximum subarray at each element is. Kadane's Algorithm says that the maximum subarray at each element is either the current element itself, or the current element plus the maximum subarray ending at the previous element.

To understand working check [this](https://dev.to/alisabaj/kadane-s-algorithm-the-maximum-subarray-problem-c31) out!!

```Javascript
function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal
}
```
