// Normal backtracking

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

  let downDir = findPath(m, n, row + 1, col, arr);
  let rightDir = findPath(m, n, row, col + 1, arr);

  return downDir + rightDir;
}

var uniquePaths = function (m, n) {
  return findPath(m, n, 0, 0, arr);
};
