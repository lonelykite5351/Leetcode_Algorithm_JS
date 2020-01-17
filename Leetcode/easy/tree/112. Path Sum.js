// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // 遞迴到底層後sum依然不為0，終止後回傳false
    if(root === null){
        return false
    }
    // 每次sum減當下節點值
    sum -= root.val

    // sum減到0了，且左右皆無子樹代表到達底層，終止後回傳true
    if(sum === 0 && root.left === null && root.right === null){
        return true
    }

    // 每次遞迴當下節點左右子樹，任何一個到達底層即回傳終止
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};