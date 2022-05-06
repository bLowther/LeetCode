/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let prev = -Infinity;
  return nums.reduce((high, num) => {
    prev = Math.max(num, prev + num);
    return Math.max(high, prev);
  }, nums[0]); 
};
