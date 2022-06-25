/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let totalAstrik = 0;
  let numberAstrik = 0;
  let currStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "|") {
      numberAstrik++;
    }

    if (s[i] == "*" && numberAstrik == 0) {
      currStack.push("*");
    }

    if (numberAstrik == 2) {
      numberAstrik = 0;
    }
  }

  return currStack.length;
};
