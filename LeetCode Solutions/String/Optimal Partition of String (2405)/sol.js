/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let nSub = 1;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      stack.push(s[i]);
    } else {
      nSub++;
      stack = [];
      stack.push(s[i]);
    }
  }

  return nSub;
};


