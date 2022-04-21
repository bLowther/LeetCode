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
var mergeKLists = function (lists) {
	const array = [];
	for (let i = 0; i < lists.length; i++) {
		let head = lists[i];
		while (head) {
			array.push(head.val);
			head = head.next;
		}
	}

	let list = new ListNode(0),
		head = list;

	array.sort((a, b) => a - b);

	for (let i = 0; i < array.length; i++) {
		head.next = new ListNode(array[i]);
		head = head.next;
	}
	return list.next;
};