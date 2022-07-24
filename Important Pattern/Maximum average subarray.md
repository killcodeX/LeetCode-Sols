# Maximum sum subarray

If you are given array and have to print maximum sum of all the sum of subarrays,
for example, ```arr=[1,2,3,4,5,6]```, and subarray size is 3.

So for 1st subarray -> ```[1,2,3]``` -> 6
So for 2nd subarray -> ```[2,3,4]``` -> 9
So for 3rd subarray -> ```[3,4,5]``` -> 12
So for 4th subarray -> ```[4,5,6]``` -> 15

But problem is, getting solution like this effecient for small set but not for large set of data as we have to add same numbers again, for example take look of 1st and 2nd subarray, numbers ```(2,3)``` is getting repeated in both. In order to make our code more efficient, we use simple logic,

first we get sum of first subarray, which is 6, consists of ```[1,2,3]```,

then to calculate sum for next subarray (2nd), logic is ```[1,2,3] - [1] + [4]``` which makes it now -> ```[2,3,4]```

```javascript
var findMaxSum = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i-k] + nums[i];
    max = Math.max(max, sum);
  }
  return max;
};
```