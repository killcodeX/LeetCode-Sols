/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let numbers = new Array(4).fill(0);
  let i = 0;
  while (num != 0) {
    numbers[i] = num % 10;
    num = Math.trunc(num / 10);
    i++;
  }
  numbers.sort((a, b) => a - b);

  let left = numbers[0] * 10 + numbers[2];
  let right = numbers[1] * 10 + numbers[3];

  return left + right;
};
