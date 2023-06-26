/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function convertToArray(head, arr) {
    let curr = head
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }
}

function buildingTree(arr, left, right) {
    if (left > right) {
        return null
    }

    let mid = left + Math.trunc((right - left) / 2)
    let node = new TreeNode(arr[mid])

    node.left = buildingTree(arr, left, mid - 1)
    node.right = buildingTree(arr, mid + 1, right)

    return node
}

var sortedListToBST = function (head) {
    if (!head) return head
    let arr = []
    convertToArray(head, arr)
    return buildingTree(arr, 0, arr.length - 1)
};