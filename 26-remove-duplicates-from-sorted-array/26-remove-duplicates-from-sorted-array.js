/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let uniqueIndex = 1;
    for(let i = 1; i < nums.length; i += 1) {
        if(nums[i] !== nums[i-1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex += 1;
        }
    }
    return uniqueIndex;
};