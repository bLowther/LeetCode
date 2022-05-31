/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let visited = new Array(nums.length).fill(0);
    
    const helper = (nums, result = [], arr = [], index = 0) => {
        if(index === nums.length) {
             result.push([...arr]);
             return result;
        }          
        for(let i = 0; i < nums.length; i++) {
            if(visited[i] === 0) {
                arr.push(nums[i]);
                visited[i] = 1;
                helper(nums, result, arr, index + 1);
                arr.pop();
                visited[i] = 0;

                while(nums[i] === nums[i + 1]) {
                    i++;
                }
            }  
        }
        return result
    }
 
    return helper(nums.sort((a, b) => a - b));
};