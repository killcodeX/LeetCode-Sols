//merge sort

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let merge = (arr, left, mid, right) => {
  let firstArraySize = mid - left + 1;
  let secondArraySize = right - mid;

  let firstArray = new Array(firstArraySize).fill(0);
  let secondArray = new Array(secondArraySize).fill(0);

  for (let i = 0; i < firstArraySize; i++) {
    firstArray[i] = arr[left + i];
  }
  for (let j = 0; j < secondArraySize; j++) {
    secondArray[j] = arr[mid + 1 + j];
  }

  //console.log(firstArray, secondArray)

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = left;

  while (i < firstArraySize && j < secondArraySize) {
    if (firstArray[i] <= secondArray[j]) {
      arr[k] = firstArray[i];
      i++;
    } else {
      arr[k] = secondArray[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < firstArraySize) {
    arr[k] = firstArray[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < secondArraySize) {
    arr[k] = secondArray[j];
    j++;
    k++;
  }
};

let mergeSort = (arr, left, right) => {
  if (left >= right) {
    return;
  }

  let mid = Math.trunc(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};

var sortArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  mergeSort(nums, left, right);

  return nums;
};
