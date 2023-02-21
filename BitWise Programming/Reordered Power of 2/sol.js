/**
 * @param {number} n
 * @return {boolean}
 */

function count(n) {
  let arr = Array(10).fill(0);
  while (n > 0) {
    arr[n % 10] += 1;
    n /= 10;
    n = Math.floor(n);
  }
  return arr;
}

function checkArrayEqual(arr1, arr2) {
  for (let i = 0; i < 10; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
}

var reorderedPowerOf2 = function (n) {
  let occDigit = count(n);

  for (let i = 0; i < 32; i++) {
    if (checkArrayEqual(occDigit, count(1 << i))) return true;
  }

  return false;
};
