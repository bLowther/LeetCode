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
const mergeKLists = function (lists) {
	const queue = new MinPriorityQueue();
	for (let i = 0; i < lists.length; i++) {
		let head = lists[i];
		while (head) {
			queue.enqueue(head.val);
			head = head.next;
		}
	}
	let list = new ListNode(0),
		head = list;
	while (queue.size()) {
		const item = queue.dequeue();
		head.next = new ListNode(item.element);
		head = head.next;
	}
	return list.next;
};