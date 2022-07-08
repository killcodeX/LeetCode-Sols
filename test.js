function merge(arr, l, mid, r) {
  let n1 = mid - l + 1;
  let n2 = r - mid;
  let a = new Array(n1);
  let b = new Array(n2);

  for (let i = 0; i < n1; i++) {
    a[i] = arr[l + i];
  }

  for (let i = 0; i < n2; i++) {
    b[i] = arr[mid + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (a[i] <= b[j]) {
      arr[k] = a[i];
      i++;
    } else {
      arr[k] = b[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = a[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = b[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }

  return arr;
}

let arr = [14, 7, 3, 12, 9, 11, 6, 2];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
