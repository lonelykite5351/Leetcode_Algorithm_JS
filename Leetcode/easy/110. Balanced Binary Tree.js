// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    // 節點空的，為平衡樹
    if(root === null || (root.left === null && root.right === null)){
        return true
    }

    // 左樹的深度
    let dLeft = findDepth(root.left)

    // 右樹的深度
    let dRight = findDepth(root.right)

    let disLR = Math.abs(dLeft - dRight)

    // 左右樹只要差距超過1，就不是平衡樹
    if(disLR > 1){
        return false
    }

    // 如果沒有，就傳入左右節點繼續往下判斷
    return isBalanced(root.left) && isBalanced(root.right)

    // 找出各節點的深度
    function findDepth(node) {
        if(node === null){
            return 0
        }
        let leftDepth = 1 + findDepth(node.left)
        let rightDepth = 1 + findDepth(node.right)
        return leftDepth > rightDepth ? leftDepth : rightDepth
    }
};