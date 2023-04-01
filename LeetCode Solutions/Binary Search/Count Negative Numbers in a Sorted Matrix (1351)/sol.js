/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function (grid) {
  let neg = 0;
  let row = grid.length;
  let col = grid[0].length;

  let i = row - 1;
  let j = 0;

  while (i >= 0 && i < row && j >= 0 && j < col) {
    if (grid[i][j] < 0) {
      neg = neg + (col - j);
      i--;
    } else {
      j++;
    }
  }

  return neg;
};
