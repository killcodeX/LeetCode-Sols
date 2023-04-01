/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let curr = 1;
  let pre = 0;
  let res = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      curr++;
    } else {
      console.log({ curr, pre });
      res += Math.min(curr, pre);
      pre = curr;
      curr = 1;
    }
  }

  return res + Math.min(curr, pre);
};
