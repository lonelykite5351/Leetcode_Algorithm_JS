/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0)

    // 目前node位置
    let current = result
    while (l1 !== null && l2 !== null){
        
        // 把小值先放進result
        if(l1.val > l2.val){
            current.next = l2
            l2 = l2.next
        }else{
            current.next = l1
            l1 = l1.next
        }
        current = current.next
    }
    
    // 將l1,l2剩下的node加到result
    if(l1 !== null){
        current.next = l1
    }

    if(l2 !== null){
        current.next = l2
    }
    return result.next
};