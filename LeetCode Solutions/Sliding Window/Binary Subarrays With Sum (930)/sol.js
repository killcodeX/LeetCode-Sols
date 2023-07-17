/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function atmost(nums, goal){
    if(goal<0)return 0;
    let res = 0
    let start = 0
    let end = 0
    let sum = 0

   for(end = 0; end < nums.length; end++){
       sum+=nums[end]

        while(sum > goal){
            sum-=nums[start]
            start++
        }

        res+=end-start+1
   }

    return res
}
var numSubarraysWithSum = function(nums, goal) {
    //console.log(atmost(nums, goal), atmost(nums, goal - 1))
    return atmost(nums, goal) - atmost(nums, goal - 1)
};