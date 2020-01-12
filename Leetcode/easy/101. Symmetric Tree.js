// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
    if(root == null || (root.left == null && root.right == null)){
        return true
    }

    root.right = reverseTree(root.right)
    return checkSame(root.left, root.right)

    function reverseTree(node) {
        if(node == null || (node.left == null && node.right == null)){
            return node
        }
        let temp = node.left
        node.left = reverseTree(node.right)
        node.right = reverseTree(temp)
        return node
    }

    function checkSame(left, right) {
        if(left == null && right == null){
            return true
        }
        if((left == null && right != null) || (left != null && right == null)){
            return false
        }
        if(left.val != right.val){
            return false
        }

        return checkSame(left.left, right.left) && checkSame(left.right, right.right)
    }
};