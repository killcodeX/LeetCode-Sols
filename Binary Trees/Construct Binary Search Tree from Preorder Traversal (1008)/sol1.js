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
 * @return {TreeNode}
 */

//  solved by stack
var bstFromPreorder = function (preorder) {
  let root = new TreeNode(preorder[0]);
  let stack = [root];
  let last;

  for (let i = 1; i < preorder.length; i++) {
    //console.log('current char -->', preorder[i])
    if (preorder[i] < stack[stack.length - 1].val) {
      stack[stack.length - 1].left = new TreeNode(preorder[i]);
      stack.push(stack[stack.length - 1].left);
    } else {
      //console.log(stack[stack.length-1].val)
      while (stack.length && stack[stack.length - 1].val < preorder[i]) {
        last = stack.pop();
      }
      //console.log('after poping new upperbound -->', last)
      last.right = new TreeNode(preorder[i]);
      stack.push(last.right);
      //console.log('right side char -->',preorder[i])
    }

    //console.log('current status of stack -->', stack)
    //console.log('<------------------------------------------->')
  }

  return root;
};
