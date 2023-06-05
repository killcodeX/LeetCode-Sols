/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    let stack = []
    let maxArea = 0
    let start

    for(let i = 0; i < heights.length; i++){
        start = i
        while(stack.length > 0 && stack[stack.length - 1][1] > heights[i]){
            let [index, height] = stack.pop()
            maxArea = Math.max(maxArea, height * (i - index))
            start = index
        }
        stack.push([start, heights[i]])
    }
    
    for(let i = 0; i < stack.length; i++){
        let [index, height] = stack[i]
        maxArea = Math.max(maxArea, height * (heights.length - index))
    }

    return maxArea
};