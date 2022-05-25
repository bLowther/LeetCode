/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums = [...new Set(nums.sort((a, b) => a - b))];
    let num = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            while(i < nums.length) {
                if (num !== nums[i]) return num;
                num++;
                i++;
            }
        }
    }
    return num;
};