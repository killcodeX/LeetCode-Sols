/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    let max = 0;
    
    let mySet = new Set();
    
    while(i < s.length){
        if(!mySet.has(s[i])){
            mySet.add(s[i])
            i++
            max = Math.max(mySet.size, max)
        }else{
            mySet.delete(s[j])
            j++
        }
    }
    
    return max
};