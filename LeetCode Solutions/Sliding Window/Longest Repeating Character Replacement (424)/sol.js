/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let length = 0
    let charCount = {}
    let maxCount = 0
    let start = 0

    for(let end = 0; end < s.length; end++){
        if(!charCount[s[end]]){
            charCount[s[end]] = 1
        }else{
            charCount[s[end]]+=1
        }
        maxCount = Math.max(maxCount, charCount[s[end]])

        while(end - start + 1 - maxCount > k){
            charCount[s[start]]-=1
            start++
        }
        length = Math.max(length, end - start + 1)
    }

    return length
};