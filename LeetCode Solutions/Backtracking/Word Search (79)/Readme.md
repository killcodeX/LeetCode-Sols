# Word Search

[link](https://leetcode.com/problems/word-search/description/)

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Examples

Example 1:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

Example 2:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

## Constraints:
1. m == board.length
2. n = board[i].length
3. 1 <= m, n <= 6
4. 1 <= word.length <= 15
5. board and word consists of only lowercase and uppercase English letters.