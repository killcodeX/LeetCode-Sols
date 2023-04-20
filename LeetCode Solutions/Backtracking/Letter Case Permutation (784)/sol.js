/**
 * @param {string} s
 * @return {string[]}
 */
function recur(i, res, s) {
  if (i == s.length) {
    res.push(s.join(""));
    return;
  }
  if (s[i] >= "a" && s[i] <= "z") {
    s[i] = s[i].toUpperCase();
    recur(i + 1, res, s);
    s[i] = s[i].toLowerCase();
  }
  recur(i + 1, res, s);
}

var letterCasePermutation = function (s) {
  let res = [];
  s = s.toLowerCase();
  s = s.split("");
  console.log(s);
  recur(0, res, s);

  return res;
};
