/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1];
    let first = 0;
    let last = nums.length - 1;
	
	while (first <= last) {		
		if (target === nums[first]) result[0] = first;
        if (target === nums[last]) result[1] = last;
		if (nums[first] < target) first++;
        if (nums[last] > target) last--;
        if (result[0] > -1 && result[1] > -1) break;
	}
	return result;
};