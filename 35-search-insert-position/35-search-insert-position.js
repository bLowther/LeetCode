/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let small = 0;
    let large = nums.length - 1;
    while (small < large) {
        if(nums[large] === target) return large;
        if(nums[small] === target) return small;
        let mid = Math.floor((small + large) / 2);
        if(mid === small) break;
        if (target < nums[mid]) {
            large = mid
        } else {
            small = mid
        }
    }
    return target > nums[large] ? large + 1 : target < nums[small] ? small : large
};