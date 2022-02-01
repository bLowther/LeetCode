/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    return s[0] === 'M' ?  1000 + romanToInt(s.slice(1))
        : s[0] === 'D' ? 500 + romanToInt(s.slice(1))
        : s[0] === 'C' && (s[1] === 'D' || s[1] === 'M') ? -100 + romanToInt(s.slice(1))
        : s[0] === 'C' ? 100 + romanToInt(s.slice(1))
        : s[0] === 'L' ? 50 + romanToInt(s.slice(1))
        : s[0] === 'X' && (s[1] === 'L' || s[1] === 'C') ? -10 + romanToInt(s.slice(1))
        : s[0] === 'X' ? 10 + romanToInt(s.slice(1))
        : s[0] === 'V' ? 5 + romanToInt(s.slice(1))
        : s[0] === 'I' && (s[1] === 'X' || s[1] === 'V') ? -1 + romanToInt(s.slice(1))
        : s[0] === 'I' ? 1 + romanToInt(s.slice(1))
        : 0;
};