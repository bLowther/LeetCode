/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null) return null;
    let pointer = head;
    let target = head;
    while(n > 0) {
        if(pointer.next) {
            pointer = pointer.next;  
        } else {
            return head.next
        }
        
        n--
    }
    while (pointer.next) {
        target = target.next;
        pointer = pointer.next
    }
    let postTarget = target.next
    target.next = postTarget.next;
    return head
};