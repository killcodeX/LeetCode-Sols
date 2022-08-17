/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let st = "";
  let opened = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      if (opened > 0) {
        st += s[i];
      }
      opened++;
    } else {
      if (opened > 1) {
        st += s[i];
      }
      opened--;
    }
  }

  return st;
};
