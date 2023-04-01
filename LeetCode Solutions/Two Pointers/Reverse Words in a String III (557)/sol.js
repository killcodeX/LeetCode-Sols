/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.split(" ");
  let res = [];

  for (let i = 0; i < str.length; i++) {
    let sts = str[i].split("");
    let left = 0;
    let right = sts.length - 1;
    while (left < right) {
      let temp = sts[left];
      sts[left] = sts[right];
      sts[right] = temp;
      left++;
      right--;
    }
    //console.log(sts)
    res.push(sts.join(""));
  }

  return res.join(" ");
};
