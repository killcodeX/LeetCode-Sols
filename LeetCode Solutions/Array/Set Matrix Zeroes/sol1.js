// Better approach

function setMatrixZeros(row, col, matrix) {
  // updating col
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }

  //updating row
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][col] = 0;
  }
}

var setZeroes = function (matrix) {
  let arr = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        arr.push([row, col]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    setMatrixZeros(arr[i][0], arr[i][1], matrix);
  }
};
