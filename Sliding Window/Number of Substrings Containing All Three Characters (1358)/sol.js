/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let count = [0, 0, 0];
  let occ = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    count[s[end].charCodeAt() - 97]++;
    while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
      count[s[start].charCodeAt() - 97]--;
      start++;
    }
    occ += start;
    end++;
  }

  return occ;
};
