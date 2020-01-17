// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null){
        return []
    }
    let result = []
    let map = {}

    // 從root作為進入點，tree的層數為0 ---> 即陣列起始位置
    node_BFS(root,0)

    for(let i in map){
        result.push(map[i])
    }
    return result.reverse()

    function node_BFS(node, tree_level) {

        // 遞迴到底層節點為空後，停止遞迴
        if(node === null){
            return 
        }

        // 當層tree若為空，新增一個陣列，當下節點的值為第一個陣列值
        if(!map[tree_level]){
            map[tree_level] = [node.val]
        }
        
        // 若已經有存在的陣列，push節點值進去當下tree層的陣列
        else{
            map[tree_level].push(node.val)
        }

        // 做完以上動作，重新遞迴一次，先左後右，因為往下繼續遞迴，層數+1
        node_BFS(node.left, tree_level + 1)
        node_BFS(node.right, tree_level + 1)
    }
};

// ------------- 以下是測試區 ---------------
let obj = [
    [15,7],
    [9,20],
    [3],
    []
]

obj[0].push(1)
console.log(obj[0])
console.log(obj.reverse())
obj[0].push(2)
console.log(obj[0])