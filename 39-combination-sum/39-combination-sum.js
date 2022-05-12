/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const helper = (remaining, offset = 0) => {
        if(remaining < 0) return []; 
        const result = [];
        for(let i = offset; i < candidates.length; i++) {
            const val = candidates[i];
            if(remaining === val) result.push([val]);
            const paths = helper(remaining - val, i);
            if(paths.length) result.push(...paths.map((p) => [val, ...p]));
        }
        return result;
    }
    return helper(target);
};