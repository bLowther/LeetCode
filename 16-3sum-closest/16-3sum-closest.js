/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  if (nums.length < 4) {
    return nums.reduce((start, total) => start + total)
  }
  let closest;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === target){
          return sum;
        } else {
          closest = closest || sum
          const currentDiff = Math.abs(target - sum);
          const closestDiff = Math.abs(target - closest);
          closest = closestDiff > currentDiff ? sum : closest
        }
      }
    }
  }
  return closest
};