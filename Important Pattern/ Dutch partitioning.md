# Dutch partitioning problem (Dutch National Flag)

[Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)

Dutch Flag Algorithm (DFA) is one of the most basic and important algorithms for arrays. It is used to segregate an array consisting of 3 numbers in linear time complexity. Also known as, three-way partitioning algorithm.

The worst time complexity for DFA is O(n) and the space complexity for the algorithm is O(1). The problem statement is as follows:

`An array consisting of 0s, 1s, and 2s is provided to you. The task is to write a function that segregates all the numbers together. The order can be anything.`

Let's assume that the provided array A is
`A = [1, 2, 0, 1, 2, 0, 1, 2, 0]`
and the output expected is
`A = [2, 2, 2, 0, 0, 0, 1, 1, 1]`

To solve the problem, we need to first select the order. For this example, let's select 0,1,2.
Now we need to have 3 pointers namely low, mid & high pointing to three different indices of the array.

The low and mid will denote the first index of the middle element i.e 0 over here. The high will denote the last index of the array.

The loop will run while the mid is lower or equal to high. As the mid traverses, if mid encounters 0, it will swap it with low and increment the low. Similarly, if mid encounters 2, it will swap it with high and decrement high. The code is as follows:-

```javascript
function swap(arr, a, b) {
  let curr = arr[a]
  arr[a] = arr[b]
  arr[b] = curr
}

var sortColors = function (nums) {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    // if mid is 0, throw it extreme lower side, and increase the lower boundary
    if (nums[mid] == 0) {
      swap(nums, mid, low)
      mid++
      low++
      // if mid is 1, don't do anything and move forward
    } else if (nums[mid] == 1) {
      mid++
      // if mid is 2, throw it extreme up side, and increase the higher boundary
    } else {
      swap(nums, mid, high)
      high--
    }
  }
}
```
