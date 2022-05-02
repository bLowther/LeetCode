/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {    
    let openBrackets = [-1];
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openBrackets.push(i);
            continue;
        }

        openBrackets.pop();

        if (!openBrackets.length) {
            openBrackets.push(i);
        } else {
            total = Math.max(total, i - openBrackets[openBrackets.length - 1]);
        }
    }

    return total;
};