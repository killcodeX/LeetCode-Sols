/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stringDecoding = (str, p) => {
    let num = 0;
    let word = "";
    let i = p;
    while (i < str.length) {
      let ch = s[i];
      if (ch >= "0" && ch <= "9") {
        num = 10 * num + (ch - "0");
      } else if (ch >= "a" && ch <= "z") {
        word += ch;
      } else if (ch == "[") {
        let [sts, pos] = stringDecoding(str, i + 1);
        word += sts.repeat(num);
        i = pos;
        num = 0;
      } else {
        return [word, i];
      }
      i++;
    }
    return [word, 0];
  };

  return stringDecoding(s, 0)[0];
};
