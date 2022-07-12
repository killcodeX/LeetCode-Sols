// helper function to merge the sort array
function merge(num1, num2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < num1.length && j < num2.length) {
    if (num2[j] >= num1[i]) {
      result.push(num1[i]);
      i++;
    } else {
      result.push(num2[j]);
      j++;
    }
  }

  while (i < num1.length) {
    result.push(num1[i]);
    i++;
  }

  while (j < num2.length) {
    result.push(num2[j]);
    j++;
  }

  return result;
}

// main function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let arr = [4, 9, 7, 1, 2, 5, 6];

let res = mergeSort(arr);

console.log(res); //[1, 2, 4, 5, 6, 7, 9]
