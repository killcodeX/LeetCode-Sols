/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let totalArr = [...items1, ...items2];

  let obj1 = {};
  let arr = [];

  for (let i = 0; i < totalArr.length; i++) {
    if (!obj1[totalArr[i][0]]) {
      obj1[totalArr[i][0]] = totalArr[i][1];
    } else {
      obj1[totalArr[i][0]] += totalArr[i][1];
    }
  }
  Object.entries(obj1).map((item) => arr.push([item[0] - "0", item[1]]));

  return arr;
};
