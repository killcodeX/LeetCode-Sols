/**
 * @param {number} n
 * @return {string[][]}
 */
function isValid(row, col, board, n) {
  // storing orignal row & col values
  let ogRow = row;
  let ogCol = col;

  // checking for back-upper diagnal
  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") return false;
    row--;
    col--;
  }

  // checking for back horizontal
  row = ogRow;
  col = ogCol;
  while (col >= 0) {
    if (board[row][col] == "Q") return false;
    col--;
  }

  // checking for back-lower diagnal
  row = ogRow;
  col = ogCol;
  while (row < n && col >= 0) {
    if (board[row][col] == "Q") return false;
    row++;
    col--;
  }

  return true;
}

function recur(col, board, ans, n) {
  if (col == n) {
    ans.push([...board].map((ele) => ele.join("")));
    return;
  }

  for (let row = 0; row < n; row++) {
    if (isValid(row, col, board, n)) {
      board[row][col] = "Q";
      recur(col + 1, board, ans, n);
      board[row][col] = ".";
    }
  }
}

var solveNQueens = function (n) {
  let ans = [];
  let string = new Array(n).fill(".");
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = [...string];
  }
  recur(0, board, ans, n);
  return ans;
};
