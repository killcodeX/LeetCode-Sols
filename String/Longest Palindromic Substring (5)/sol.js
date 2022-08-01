/**
 * @param {string} s
 * @return {string}
 */

function expandFromMiddle(str, left, right) {
  if (str == null || left > right) {
    return 0;
  }
  //console.log('before --->',{str, left, right})
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  //console.log('after --->',{str, left, right})
  //console.log('return ---', right - left + 1)
  return right - left - 1;
}

var longestPalindrome = function (s) {
  if (s == null || s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let l1 = expandFromMiddle(s, i, i);
    let l2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(l1, l2);
    if (len > end - start) {
      start = i - Math.trunc((len - 1) / 2);
      end = i + Math.trunc(len / 2);
    }
  }

  return s.substring(start, end + 1);
};
