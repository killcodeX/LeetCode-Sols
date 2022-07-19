# Maximum sum subarray

```
let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;

  for (let i = 0; i < nums.length - k; i++) {
    sum = sum - nums[i] + nums[i + k];
    max = Math.max(max, sum);
  }
```