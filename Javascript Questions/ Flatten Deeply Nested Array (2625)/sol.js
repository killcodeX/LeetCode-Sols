/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

function handleFlat(arr, n) {
  if (n == 0) {
    return arr;
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...handleFlat(arr[i], n - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

var flat = function (arr, n) {
  let res = [];
  return handleFlat(arr, n);
};
