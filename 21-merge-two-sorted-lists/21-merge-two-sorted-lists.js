/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return list1 || list2;
    if(!list1 && !list2) return null;
    
    let head = new ListNode(-1);
    let pointer = head;
    
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = new ListNode(list1.val);
            list1 = list1.next
        } else {
            pointer.next = new ListNode(list2.val);
            list2 = list2.next
        }
        pointer = pointer.next
    }
    pointer.next = list1 || list2;
    
    return head.next;
};