/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let freq = {};
  let res = [];

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = i;
  }

  //console.log(freq)
  let last = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    //console.log('current val',freq[s[i]])
    last = Math.max(last, freq[s[i]]);
    if (last == i) {
      res.push(last - start + 1);
      start = last + 1;
    }
  }
  return res;
};
