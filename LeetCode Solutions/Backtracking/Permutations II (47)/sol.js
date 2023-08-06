/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function recur(nums, arr, freq, res){
    if(arr.length == nums.length){
        res.push([...arr])
        return
    }
    
    for(let i = 0; i < Object.keys(freq).length; i++){
        if(freq[Object.keys(freq)[i]] > 0){
            arr.push(Object.keys(freq)[i] - '0')
            freq[Object.keys(freq)[i]]--
            recur(nums, arr, freq, res)
            freq[Object.keys(freq)[i]]++
            arr.pop()
        }
    }
}


var permuteUnique = function(nums) {
    let res = []
    let freq = {}
    for(let i = 0; i < nums.length; i++){
        if(!freq[nums[i]]){
            freq[nums[i]] = 1
        }else{
            freq[nums[i]]++
        }
    }
    recur(nums, [], freq, res)
    return res
};