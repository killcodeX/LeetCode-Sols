/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * (using Merge Sort Method With Extra Space Memory)
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = nums1.length
    let l2 = nums2.length
    let arr = []
    let left = 0
    let right = 0

    while(left < l1 && right < l2){
        if(nums1[left] < nums2[right]){
            arr.push(nums1[left])
            left++
        }else{
            arr.push(nums2[right])
            right++
        }
    }

    while(left < l1){
        arr.push(nums1[left])
        left++
    }

    while(right < l2){
        arr.push(nums2[right])
        right++
    }

    let mid = Math.trunc(arr.length / 2)

    return arr.length%2? arr[mid]:(arr[mid-1]+arr[mid])/2
};