// best approach

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let col0 = true;

  // Step 1: Traverse the matrix and mark 1st row & col accordingly
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark row
        if (j > 0) {
          matrix[0][j] = 0; // Mark column
        } else {
          col0 = false; // Special mark for first column
        }
      }
    }
  }

  // Step 2: Mark with 0 from (1,1) to (n-1, m-1)
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 3: Finally mark the first row and column
  if (matrix[0][0] === 0) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }
  if (!col0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};
