# Subarray

* Total number of subarrays present in an array = ```(n * (n + 1)) / 2```


## Example

Given an integer array nums, return the number of subarrays filled with 0.

```
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
```

### Sol

```
var zeroFilledSubarray = function(nums) {
    
    let res = 0;
    let currSubSize = 0
    
    for (let i = 0, j = 0; i < nums.length; ++i) {
        if (nums[i] == 0){
            currSubSize++
        }else if(nums[i] != 0){
            res+=Math.trunc((currSubSize * (currSubSize + 1)) / 2)
            currSubSize = 0
        }
    }
    
    res+=Math.trunc((currSubSize * (currSubSize + 1)) / 2)
    
    return res
    
};
```

* Brute Force method of printing all subarray possible combinations

```
function createSub(nums){
	let currSub = 1
  let numberofSub = 0
  
  while(currSub <= nums.length){
  	let start = 0
    let end = currSub
    while(end <= nums.length){
    	console.log(nums.slice(start, end))
      console.log({start, end})
      numberofSub++
      start+=1
      end+=1
    }
    currSub++
  }
  console.log('Total number of subarray is --', numberofSub)
}
```