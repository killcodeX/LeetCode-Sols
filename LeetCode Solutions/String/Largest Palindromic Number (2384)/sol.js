/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let freq = new Array(10).fill(0);
  let st = "";

  for (let i = 0; i < num.length; i++) {
    freq[num[i] - "0"]++;
  }

  let mid = -1;
  for (let i = 9; i >= 0; i--) {
    if (freq[i] == 0) continue;
    if (freq[i] % 2 == 1) {
      mid = Math.max(mid, i);
    }
    if (i == 0 && st.length == 0) break;
    let t = Math.trunc(freq[i] / 2);
    while (t > 0) {
      st += i;
      t--;
    }
  }
  let rev = st.split("").reverse().join("");

  if (mid != -1) {
    st = st + mid + rev;
  } else {
    st = st + rev;
  }

  return st.length == 0 ? "0" : st;
};
