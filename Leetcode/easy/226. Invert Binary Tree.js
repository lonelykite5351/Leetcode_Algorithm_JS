// https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(root == null || (root.left == null && root.right == null)){
        return root
    }
    let temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
};

/*
            4
          /  \
         2    7
        / \  / \
       1  3 6   9

    step1: 
        temp = left(2)
        left = invertTree(7)
        right = invertTree(2)
    
    invertTree(7)
        temp = left(6)
        left = invertTree(9) ----> 底下左右都是null了，return當前的root = 9
        right = invertTree(6) ----> return當前的root = 6

    invertTree(2)
        temp = left(1)
        left = invertTree(3) ----> 底下左右都是null了，return當前的root = 3
        right = invertTree(1) ----> return當前的root = 1

    step2: 
        temp = left(2)
        left = invertTree(7) ----> return 7底下的左:9，右:6
        right = invertTree(2) ----> return 2底下的左:3，右:1

    step3:
        return root(4)底下的結果 ----> 4底下的左:7，右:2
*/