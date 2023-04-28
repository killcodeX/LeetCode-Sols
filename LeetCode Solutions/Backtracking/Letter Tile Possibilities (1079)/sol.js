/**
 * @param {string} tiles
 * @return {number}
 */

function recur(tiles, arr, flag, res) {
  if (arr.length == tiles.length) {
    return;
  }

  for (let i = 0; i < tiles.length; i++) {
    if (!flag[i]) {
      flag[i] = true;
      arr.push(tiles[i]);
      res.add(arr.join(""));
      recur(tiles, arr, flag, res);
      arr.pop();
      flag[i] = false;
    }
  }
}
var numTilePossibilities = function (tiles) {
  let res = new Set();
  let flag = new Array(tiles.length).fill(false);
  recur(tiles, [], flag, res);
  //console.log(res)
  return res.size;
};
