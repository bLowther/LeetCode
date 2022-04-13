/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, combos = []) {
    const letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let firstLetters = letters[digits[0]];
    if(firstLetters) {
        let newCombos = [];
        const remaining = digits.slice(1);
        if (combos.length > 0) {          
          combos.forEach(previous =>
              firstLetters.forEach(current => 
                  newCombos.push(previous + current)      
          ))
        } else {
          newCombos = firstLetters
        }        
        return letterCombinations(remaining, newCombos)
    }
    return combos
};