/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0)return [[]]
    const permutations = [];
    const item = nums[0]
    for (const permutation of permute(nums.slice(1))) {
        for (let i = 0; i <= permutation.length; i++) {
            const copy = [...permutation];
            copy.splice(i, 0, item);
            permutations.push(copy);
        }
    }
    return permutations;
};