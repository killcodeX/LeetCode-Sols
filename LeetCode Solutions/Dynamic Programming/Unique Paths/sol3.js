/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let path = m + n - 2; // Total steps needed
  let r = m - 1; // Steps down
  let res = 1; // Result variable

  for (let i = 1; i <= r; i++) {
    res = (res * (path - r + i)) / i;
  }

  return res;
};
