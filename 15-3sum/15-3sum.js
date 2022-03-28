/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i];
    if (i - 1 >= 0 && a === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const b = nums[l];
      const c = nums[r];
      const sum = a + b + c;
      if (sum < 0) l++;
      else if (sum > 0) r--;
      else {
        res.push([a, b, c]);
        while (l < r && nums[l] === b) l++;
        while (l < r && nums[r] === c) r--;
      }
    }
  }
  return res;
};

