# Boyer-Moore Majority Vote algorithm

The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than N/ 2 occurrences. This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, which works in O(N) time complexity and O(1) space complexity.

Ref - (Majority Element)[https://leetcode.com/problems/majority-element/description/]

This algorithm works on the fact that if an element occurs more than N/2 times, it means that the remaining elements other than this would definitely be less than N/2. So let us check the proceeding of the algorithm.

- First, choose a candidate from the given set of elements if it is the same as the candidate element, increase the votes. Otherwise, decrease the votes if votes become 0, select another new element as the new candidate.

## Approach:

Initialize 2 variables:

- Count – for tracking the count of element
- Element – for which element we are counting
- Traverse through the given array.
  - If Count is 0 then store the current element of the array as Element.
  - If the current element and Element are the same increase the Count by 1.
  - If they are different decrease the Count by 1.
- The integer present in Element should be the result we are expecting.

## Example

This code implements Boyer-Moore Voting Algorithm to find the “majority element” in an array nums. A “majority element” is an element that appears more than n/2 times in the array, where n is the length of the array. Here’s a breakdown:

1. Variables Initialization

```javascript
let elem
let cnt = 0
```

- elem: Stores the current candidate for the majority element.
- cnt: Keeps track of the count for the candidate element.

2. First Loop: Identifying the Candidate

```javascript
for (let i = 0; i < nums.length; i++) {
  if (cnt === 0) {
    cnt = 1
    elem = nums[i]
  } else if (elem === nums[i]) {
    cnt++
  } else {
    cnt--
  }
}
```

This loop does two things:

1. Candidate Selection:
   - If cnt is 0, set elem to the current number nums[i] and reset cnt to 1.
2. Vote Counting:
   - If the current element nums[i] matches elem, increase cnt by 1.
   - If it doesn’t match, decrease cnt by 1.

### Explanation:

The algorithm assumes if the majority element exists, it will cancel out non-majority elements when decrementing cnt. Eventually, the remaining elem will be the candidate for the majority element.

3. Second Loop: Verify the Candidate

```javascript
cnt = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === elem) {
    cnt++
  }
}
```

- This loop counts how many times elem appears in nums to confirm if it’s truly the majority element.

4. Final Check

```javascript
if (cnt > Math.floor(nums.length / 2)) {
  return elem
}
return -1
```

- If cnt is greater than n/2, elem is the majority element, and it is returned.
- Otherwise, return -1 to indicate no majority element exists.
