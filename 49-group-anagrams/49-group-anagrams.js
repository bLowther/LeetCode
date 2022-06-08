/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    
    const isAna = (word1, word2) => {
        if(word1.length !== word2.length) return false;
        const letters = word2.split("")
        for(letter of word1) {
            const index = letters.indexOf(letter)
            if(index > -1) {
                letters.splice(index, 1);
            } else {
                return false;
            }  
        }
        return true;
    }
    
    for(let i = 0; i < strs.length; i++) {
        const current = strs[i];
        const anagrams = [current];
        for(let j = i + 1; j < strs.length; j++) {
            const next = strs[j];
            if(isAna(current, next)) {
                anagrams.push(next);
                strs.splice(j, 1);
                j--;
            }
        }
        result.push(anagrams)
    }
    
    return result;
};