# Euclidean algorithm

It is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.

For example, 21 is the GCD of 252 and 105 (as 252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also the GCD of 105 and 252 − 105 = 147.

Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal.
When that occurs, they are the GCD of the original two numbers.

## Euclid's Algorithm

```
function gcd(a,b){
    if(a == 0) return b
    if(b == 0) return a
    return gcd(b, a%b)
}
```

## Examples

Example 1:

```
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
```

## Solution

```javascript
function gcd(a,b){
    if(a == 0) return b
    if(b == 0) return a
    return gcd(b, a%b)
}

var findGCD = function(nums) {

    nums.sort((a,b) => a-b)

    let max = nums[nums.length - 1]
    let min = nums[0]
    
    return gcd(max,min)
};
```
