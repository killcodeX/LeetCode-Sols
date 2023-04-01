# Largest Palindromic Number

[link](https://leetcode.com/problems/largest-palindromic-number/)
[explanation](https://leetcode.com/problems/largest-palindromic-number/discuss/2456655/Python-HashMap-Solution-with-Explanation)

You are given a string num consisting of digits only.

Return the largest palindromic integer (in the form of a string) that can be formed using digits taken from num. It should not contain leading zeroes.

Notes:

* You do not need to use all the digits of num, but you must use at least one digit.
* The digits can be reordered.

# Examples

Example 1:

```
Input: num = "444947137"
Output: "7449447"
Explanation: 
Use the digits "4449477" from "444947137" to form the palindromic integer "7449447".
It can be shown that "7449447" is the largest palindromic integer that can be formed.
```

Example 2:

```
Input: num = "00009"
Output: "9"
Explanation: 
It can be shown that "9" is the largest palindromic integer that can be formed.
Note that the integer returned should not contain leading zeroes.
```


## Constraints:
1. 1 <= num.length <= 10**5
2. num consists of digits.