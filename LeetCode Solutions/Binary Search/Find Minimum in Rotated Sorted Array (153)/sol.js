/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    
    if(nums.length == 1) return nums[0]

    if(nums[0] < nums[nums.length - 1]) return nums[0]

    let left = 0
    let right = nums.length - 1
    let ans = Infinity

    while(left <= right){
        let mid = Math.trunc(left + (right - left) / 2)
        //console.log(mid)
        if(nums[mid] >= nums[0]){
            left = mid + 1
        }else{
            ans = Math.min(ans, nums[mid])
            right = mid - 1
        }
    }

    return ans

};