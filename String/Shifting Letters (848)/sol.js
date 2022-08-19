/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let st = s.split("");

  for (let i = shifts.length - 1; i >= 0; i--) {
    // fill up total count at each point starting backwards
    if (i !== shifts.length - 1) {
      shifts[i] += shifts[i + 1];
    }
    const shiftCount = Math.trunc(shifts[i] % 26);
    let currTotal = s[i].charCodeAt() + shiftCount;
    if (currTotal > 122) {
      currTotal = currTotal - 26;
    }
    st[i] = String.fromCharCode(currTotal);
  }

  return st.join("");
};
