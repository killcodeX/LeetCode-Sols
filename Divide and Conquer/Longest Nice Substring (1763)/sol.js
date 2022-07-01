/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (!s.length || s.length < 2) {
    return "";
  }

  let i = 0;

  for (; i < s.length; i++) {
    const isUpper = isUpperCase(s[i]);
    if (isUpper && !s.includes(s[i].toLowerCase())) {
      break;
    } else if (!isUpper && !s.includes(s[i].toUpperCase())) {
      break;
    }
  }
  // when the string is nice
  if (i === s.length) {
    return s;
  }

  const leftSubstr = longestNiceSubstring(s.substring(0, i));
  const rightSubstr = longestNiceSubstring(s.substring(i + 1));
  // question is asking for the first occurrence of the solution so we have the equality sign >=
  return leftSubstr.length >= rightSubstr.length ? leftSubstr : rightSubstr;
};

function isUpperCase(c) {
  return c.toUpperCase() === c;
}
