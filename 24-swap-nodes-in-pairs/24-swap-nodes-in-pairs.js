/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  const head1 = head;
  const head2 = head1.next;
  const head3 = head2.next; 
  head2.next = head1;
  head1.next = swapPairs(head3); 
  return head2;
};