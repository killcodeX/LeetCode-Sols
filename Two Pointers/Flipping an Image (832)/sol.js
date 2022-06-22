/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let numberRows = image.length;

  for (let i = 0; i < numberRows; i++) {
    console.log(image[i]);
    let left = 0;
    let right = image[i].length - 1;
    while (left <= right) {
      let temp = image[i][left] == 1 ? 0 : 1;
      image[i][left] = image[i][right] == 1 ? 0 : 1;
      image[i][right] = temp;
      left++;
      right--;
    }
  }
  return image;
};
