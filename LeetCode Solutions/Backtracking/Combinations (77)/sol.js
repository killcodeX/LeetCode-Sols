/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function recur(i, n, arr, res, k){
    if(i > n || arr.length == k){
        if(arr.length == k){
            res.push([...arr])
        }
        return
    }
    arr.push(i)
    recur(i+1, n, arr, res, k)
    arr.pop()
    recur(i+1, n, arr, res, k)
}
var combine = function(n, k) {
    let res = []
    recur(1, n, [], res, k)
    return res
};