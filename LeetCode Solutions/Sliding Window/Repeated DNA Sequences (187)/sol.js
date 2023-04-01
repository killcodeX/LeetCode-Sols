/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let seen = new Set();
  let res = new Set();

  for (let i = 0; i + 9 < s.length; i++) {
    let currSub = s.substring(i, i + 10);
    if (seen.has(currSub)) {
      res.add(currSub);
    } else {
      seen.add(currSub);
    }
  }

  return [...res];
};
