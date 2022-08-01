# Count Negative Numbers in a Sorted Matrix

[link](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

## Examples

Example 1:

```
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
```

Example 2:

```
Input: grid = [[3,2],[1,0]]
Output: 0
```

## Constraints:
1. m == grid.length
2. n == grid[i].length
3. 1 <= m, n <= 100
4. -100 <= grid[i][j] <= 100