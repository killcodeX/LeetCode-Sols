/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function matches(obj1, obj2, s1){
    //console.log(obj1, obj2)
    for(let i = 0; i < s1.length; i++){
        if(obj1[s1[i]] !== obj2[s1[i]]){
            return false
        }
    }
    return true
}

var checkInclusion = function(s1, s2) {
    let s1Count = {}
    let s2Count = {}

    for(let i = 0; i < s1.length; i++){
        if(!s1Count[s1[i]]){
            s1Count[s1[i]] = 1
        }else{
            s1Count[s1[i]]++
        }

        if(!s2Count[s2[i]]){
            s2Count[s2[i]] = 1
        }else{
            s2Count[s2[i]]++
        }
    }

    let start = 0
    let end = s1.length

    while(end <= s2.length){
        if(matches(s1Count, s2Count, s1)){
            return true
        }

        if(!s2Count[s2[end]]){
            s2Count[s2[end]] = 1
        }else{
            s2Count[s2[end]]++
        }

        s2Count[s2[start]]--
        // if(s2Count[s2[start]] == 0){
        //     delete s2Count[s2[start]]
        // }
        start++
        end++
    }

    return false
};