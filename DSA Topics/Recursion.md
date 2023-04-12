# Recursion

## All Kind of Patterns in Recurion

### Printing All the Subset of the array

```
func(){
    base Case;

    add the element
    call the func() with i+1

    remove the element
    call the func() with i+1
}
```

Note:- Whenever there is a porblem related to array and you have to figure out a comibantion(permutation) from it!! Always use this Pick and Not Pick Method of Recursion

#### Subsequence Sum equals to k

```javascript
let num = [1, 1, 2];

function recur(i, num, sum, target, arr) {
  if (i >= num.length) {
    return;
  }

  if (sum == target) {
    console.log(arr);
  }
  arr.push(num[i]);
  sum += num[i];

  recur(i + 1, num, sum, target, arr);

  arr.pop();
  sum -= num[i];

  recur(i + 1, num, sum, target, arr);
}

let res = [];

recur(0, num, 0, 2, []);

console.log(res);
```

### The solution set must not contain duplicate subsets.

Whenever you encounter this type of question where you need to produce subset but without duplicate one, then always use this below method.

1. Sort the initial array
2. In recursion function use for loop
3. add if condition checking if current element and prev element is not equal
4. finally perform your action,

#### Example

Given an integer array nums that may contain duplicates, return all possible
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

```javascript
function recur(i, nums, arr, res) {
  res.push([...arr]);

  for (let j = i; j < nums.length; j++) {
    if (j != i && nums[j] == nums[j - 1]) continue;

    arr.push(nums[j]);
    recur(j + 1, nums, arr, res);
    arr.pop();
  }
}
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  recur(0, nums, [], res);
  return res;
};
```

### To find Permutation of given array

#### Approach 1

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

```javascript
function recur(nums, arr, ans, freq) {
  if (arr.length == nums.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      arr.push(nums[i]);
      recur(nums, arr, ans, freq);
      arr.pop();
      freq[i] = false;
    }
  }
}

var permute = function (nums) {
  let ans = [];
  let arr = [];
  let freq = new Array(nums.length).fill(false);
  recur(nums, arr, ans, freq);
  return ans;
};
```

#### Approach 2

```javascript
function swap(j, i, nums) {
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}

function recur(i, nums, ans) {
  if (i == nums.length) {
    ans.push([...nums]);
    return;
  }

  for (let j = i; j < nums.length; j++) {
    swap(j, i, nums);
    recur(i + 1, nums, ans);
    swap(j, i, nums);
  }
}

var permute = function (nums) {
  let ans = [];
  recur(0, nums, ans);
  return ans;
};
P;
```
