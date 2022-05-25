/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates || candidates.length === 0) return [];
    candidates.sort((a, b) => a - b);
    const helper = (candidates, target, combos = [], index = 0, carry = []) => {
        if (target === 0) return combos.push([...carry])
        if (target < 0) return combos
        for (let i = index; i < candidates.length; i++) {
            helper(candidates, target - candidates[i], combos, i + 1, [...carry, candidates[i]])
            while(i < candidates.length - 1 && candidates[i] === candidates[i + 1]) i++
        }
        return combos;
    }
    return helper(candidates, target)
};