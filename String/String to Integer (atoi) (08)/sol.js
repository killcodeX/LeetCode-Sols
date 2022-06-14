/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let i = 0, sign = 1, total = 0;
    let maxVal = Math.pow(2, 31) - 1;
    let minVal = Math.pow(-2, 31);

    
    //1. Empty string
    if(s.length == 0) return 0;

    //2. Remove Spaces
    while(s[i] == ' ' && i < s.length){
        i++
    }
    
    //3. Handle signs
    if(s[i] == '+' || s[i] == '-'){
        sign = s[i] == '+' ? 1 : -1;
        i++;
    }
    
    //4. Convert number and avoid overflow
    let bound = Math.trunc( maxVal / 10);
    
    while(i < s.length && s[i] >= '0' && s[i] <= '9'){
        let digit = s[i] - '0';
        if (total > bound || (total == bound && digit > 7)) {
            return sign == 1 ? maxVal : minVal;
        }
        total = total * 10 + digit;
        i++;
    }
    return total * sign;

};