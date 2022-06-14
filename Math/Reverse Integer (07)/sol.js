/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    let maxVal = Math.pow(2, 31) - 1;
    let minVal = Math.pow(-2,31);
    let num = 0;
    
    let sign = x > 0? 1:-1;
    x = Math.abs(x)
    
    while(x != 0){
        let b = x%10;
        num = num *10 + b;
        x = Math.trunc(x/10);
    }
    //console.log(num, maxVal)
    num = sign * num
    if(num > maxVal){
        return 0
    }else if(num < minVal){
        return 0
    }
    
    return num
};