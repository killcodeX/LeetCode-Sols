/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function calculateSpeed(k, piles) {
    let hour = 0

    for (let i = 0; i < piles.length; i++) {
        if (piles[i] % k == 0) {
            hour += Math.trunc(piles[i] / k)
        } else {
            hour += Math.trunc(piles[i] / k) + 1
        }
    }
    return hour
}
var minEatingSpeed = function (piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let ans = Infinity

    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2)
        if (calculateSpeed(mid, piles) <= h) {
            ans = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return ans
};