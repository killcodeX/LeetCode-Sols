/**
 * @param {number} n
 * @return {string[]}
 */
function recur(n, ans, open, close, arr) {
  if (open == n && close == n) {
    ans.push(arr.join(""));
    return;
  }
  if (open < n) {
    arr.push("(");
    recur(n, ans, open + 1, close, arr);
    arr.pop();
  }

  if (open > close) {
    arr.push(")");
    recur(n, ans, open, close + 1, arr);
    arr.pop();
  }
}

var generateParenthesis = function (n) {
  let ans = [];
  recur(n, ans, 0, 0, []);
  return ans;
};
