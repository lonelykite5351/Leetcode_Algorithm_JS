// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 2個停止條件
    // 如果搜尋到底部兩tree對應的node為空，代表tree走訪到底部，回傳true
    if((p === null && q === null)){
        return true
    }

    // 兩棵tree任一個node只符合其中一個為空，或兩值不同，回傳false
    if(p === null || q === null || p.val !== q.val){
        return false
    }

    // 當下node相同值，繼續往當下node的左節點與右節點走訪
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};