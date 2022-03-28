/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    const firstWord = strs[0];
    if (strs.length === 1) {
        return firstWord 
    }

    for(let i = 0; i < firstWord.length + 1; i++) {
        let check = firstWord.slice(0,i);
        for(let j = 0; j < strs.length; j++) {
            if (strs[j].slice(0,i) !== check || strs[j] === prefix) {
                return prefix
            }
        }
        prefix = check;
    }
    return prefix
};