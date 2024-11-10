# Set Matrix Zeroes

[link](https://leetcode.com/problems/set-matrix-zeroes/description/)
[explanation](https://takeuforward.org/data-structure/set-matrix-zero/)

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

## Examples

Example 1:

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

Example 2:

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

## Constraints:

1. m == matrix.length
2. n == matrix[0].length
3. 1 <= m, n <= 200
4. -2**31 <= matrix[i][j] <= 2**31 - 1
