/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  let freqArr = new Array(k).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let rem = ((arr[i] % k) + k) % k;
    freqArr[rem] += 1;
  }

  if (freqArr[0] % 2 !== 0) return false;

  for (let i = 1; i < freqArr.length; i++) {
    if (freqArr[i] != freqArr[k - i]) return false;
  }

  return true;
};
