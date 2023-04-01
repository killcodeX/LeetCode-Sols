/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      num++;
    } else {
      num--;
    }

    if (num == 0) {
      count++;
    }
  }

  return count;
};
