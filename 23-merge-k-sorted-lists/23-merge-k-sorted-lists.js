/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists, res = new ListNode(0), head = res) {
    let min = [null, Infinity];
    
    for(let i = 0; i < lists.length; i++){
        if(!lists[i]) continue;
        if(min[1] > lists[i].val) 
            min = [i, lists[i].val];
    }
    
    if(min[0] === null) return res.next;
    head.next = new ListNode(min[1]);
    lists[min[0]] = lists[min[0]].next;
    
    return mergeKLists(lists, res, head.next);
};