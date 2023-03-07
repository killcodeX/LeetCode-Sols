var buildTree = function(preorder, inorder) {
    let map = {}

    for(let i = 0; i < inorder.length; i++){
        map[inorder[i]] = i
    }

    function treeHelper(start, end, preorderIndex){
        if(start > end){
            return null
        }

        let val = preorder[preorderIndex]
        let node = new TreeNode(val)

        nodeIndex = map[val]

        node.left = treeHelper(start, nodeIndex - 1, preorderIndex + 1)
        node.right = treeHelper(nodeIndex + 1, end, preorderIndex + nodeIndex - start + 1)

        return node
    }

    return treeHelper(0, inorder.length - 1, 0)
};
