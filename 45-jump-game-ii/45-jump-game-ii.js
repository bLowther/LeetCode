/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, far = 0, current = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        far = Math.max(far, nums[i] + i);
        if (i === current) {
            current = far;
            jumps++;
        }
    }
    return jumps;
};
