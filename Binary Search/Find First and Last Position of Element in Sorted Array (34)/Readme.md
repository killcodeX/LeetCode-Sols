# Find First and Last Position of Element in Sorted Array

[link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

## Examples

Example 1:

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

Example 2:

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

Example 3:

```
Input: nums = [], target = 0
Output: [-1,-1]
```

## Constraints:

1. 0 <= nums.length <= 10**5
2. -10**9 <= nums[i] <= 10**9
3. All values of nums are unique.
4. nums is an ascending array that is possibly rotated.
5. -10**4 <= target <= 10**4
