/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0;
  let leftMost = new Array(height.length).fill(0);
  let rightMost = new Array(height.length).fill(0);

  let currleft = 0;
  let currRight = 0;

  for (let i = 0; i < height.length; i++) {
    currleft = Math.max(currleft, height[i]);
    leftMost[i] = currleft;
  }

  for (let i = height.length - 1; i >= 0; i--) {
    currRight = Math.max(currRight, height[i]);
    rightMost[i] = currRight;
  }

  for (let i = 0; i < height.length; i++) {
    total += Math.min(leftMost[i], rightMost[i]) - height[i];
  }

  return total;
};
