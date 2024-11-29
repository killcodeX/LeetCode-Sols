# Check If Array Pairs Are Divisible by k

[link](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/description/)

Given an array of integers arr of even length n and an integer k.
We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

Return true If you can find a way to do that or false otherwise.

## Examples

Example 1:

```
Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
```

Example 2:

```
Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).
```

Example 3:

```
Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
```

## Constraints:

1. arr.length == n
2. 1 <= n <= 10\*\*5
3. n is even.
4. -10**9 <= arr[i] <= 10**9
5. 1 <= k <= 10\*\*5
