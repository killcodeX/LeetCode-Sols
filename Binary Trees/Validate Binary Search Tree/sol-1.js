// Iterative sol

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let stack = []
    let curr = root
    let prev = null
    
    while(curr != null || stack.length != 0){
        while(curr != null){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        if(prev != null && curr.val <= prev.val) return false
        prev = curr
        curr = curr.right
    }
    
    return true
};