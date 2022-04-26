/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let values = [];
    let pointer = head;
    while (values.length < k) {
        if (!pointer) return head;
        values.unshift(pointer.val);
        pointer = pointer.next;
    }
    let list = new ListNode(values[0]);
    values.shift();
    let reverse = list;
    values.forEach((val) => {reverse.next = new ListNode(val); reverse = reverse.next});
    reverse.next = reverseKGroup(pointer, k);
    return list;
};