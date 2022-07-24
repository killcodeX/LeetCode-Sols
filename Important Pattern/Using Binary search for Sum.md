# Using Binary Search inorder to get Sum

You can get sum of any array using Binary Search too,

```javascript
function binarySearch(arr){
    let start = 0
    let end = arr.length

    while(start < end){
        let mid = Math.floor((end+start)/2)
        if(arr[mid] == 1){
            start=mid+1
        }else{
            end = mid
        }
    }
    return start
}

var kWeakestRows = function() {

    let mat = [[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]]
    
    let rows = []
    
    for(let i = 0; i < mat.length; i++){
        rows.push([binarySearch(mat[i]),i])
    }
};
```
