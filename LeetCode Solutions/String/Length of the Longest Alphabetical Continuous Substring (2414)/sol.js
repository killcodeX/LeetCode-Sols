var longestContinuousSubstring = function (s) {
  let len = 1;
  let maxLen = 1;

  for (let i = 0; i < s.length - 1; ++i) {
    if (s.charCodeAt(i + 1) - s.charCodeAt(i) == 1) {
      ++len;
      maxLen = Math.max(maxLen, len);
    } else {
      len = 1;
    }
  }
  return maxLen;
};
