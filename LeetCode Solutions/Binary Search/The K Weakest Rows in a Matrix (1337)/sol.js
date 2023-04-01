/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function binarySearch(arr) {
  let start = 0;
  let end = arr.length;

  while (start < end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] == 1) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

var kWeakestRows = function (mat, k) {
  let rows = [];
  const ret = new Array(k).fill(0);

  for (let i = 0; i < mat.length; i++) {
    rows.push([binarySearch(mat[i]), i]);
  }
  rows.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  for (let i = 0; i < k; ++i) {
    ret[i] = rows[i][1];
  }
  return ret;
};
