# Number of Islands 

[link](https://leetcode.com/problems/number-of-islands/)
[explanation](https://leetcode.com/problems/number-of-islands/discuss/429842/JavaScript-DFS-Commented-Thought-Process-Beats-100-Time-and-Space)

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## Examples

Example 1:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

Example 2:

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```


## Constraints:
1. m == grid.length
2. n == grid[i].length
3. 1 <= m, n <= 300
4. grid[i][j] is '0' or '1'.