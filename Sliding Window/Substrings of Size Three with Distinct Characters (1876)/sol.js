/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    
    if(s.length < 3) return 0
    
    let left = 0
    let right = 2
    let count = 0
    
    while(right < s.length){
        let m = left+1
        if(s[left] != s[m] && s[m]!=s[right] && s[right]!=s[left]){
            count++
        }
        left++
        right++
    }
    
    return count
    
};