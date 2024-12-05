// DP

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findPath(m, n, row, col, arr) {
  if (row >= m || col >= n) {
    return 0;
  }

  if (row == m - 1 && col == n - 1) {
    return 1;
  }
  if (arr[row][col] != -1) return arr[row][col];
  let downDir = findPath(m, n, row + 1, col, arr);
  let rightDir = findPath(m, n, row, col + 1, arr);
  arr[row][col] = downDir + rightDir;
  return downDir + rightDir;
}

var uniquePaths = function (m, n) {
  // let col = new Array(n).fill(-1)
  // let arr = new Array(m).fill(col)
  let arr = Array.from({ length: m }, () => Array(n).fill(-1));

  return findPath(m, n, 0, 0, arr);
};
