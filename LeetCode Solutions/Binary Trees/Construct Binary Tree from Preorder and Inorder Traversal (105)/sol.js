/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function treeHelper(preStart, inStart, inEnd, preorder, inorder){
    if(preStart > preorder.length - 1 || inStart > inEnd){
        return null
    }

    let root = new TreeNode(preorder[preStart])

    let inIndex = inorder.findIndex(item => item == root.val)

    root.left = treeHelper(preStart + 1, inStart, inIndex - 1, preorder, inorder)
    root.right = treeHelper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder)

    return root
}
var buildTree = function(preorder, inorder) {
    return treeHelper(0, 0, inorder.length - 1, preorder, inorder)
};