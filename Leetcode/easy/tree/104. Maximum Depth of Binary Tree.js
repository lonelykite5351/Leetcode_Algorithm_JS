// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 遞迴找最深二元樹
var maxDepth = function(root) {
    
    return findMaxDepth(root)

    function findMaxDepth(node) {
        if(node === null){
            return 0
        }
        let leftDep = 1
        let rightDep = 1
        if(node.left !== null){
            leftDep += findMaxDepth(node.left)
        }
        if(node.right !== null){
            rightDep += findMaxDepth(node.right)
        }
        return leftDep > rightDep ? leftDep : rightDep
    }
};