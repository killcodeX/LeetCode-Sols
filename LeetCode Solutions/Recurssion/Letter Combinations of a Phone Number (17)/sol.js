/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];

  if (digits.length <= 0) {
    return res;
  }

  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let st = digits.split("");

  function permute(string, index) {
    if (index === digits.length) {
      res.push(string);
      return;
    }

    for (let x of obj[st[index]]) {
      permute(string + x, index + 1);
    }
  }
  permute("", 0);
  return res;
};
