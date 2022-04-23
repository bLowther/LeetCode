/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = (divisor !== 0) ? dividend / divisor : 0;
    
    if (result > 2 ** 31 - 1) { return 2 ** 31 - 1; }
    if (result < 2 ** 31 * - 1) { return 2 ** 31 * - 1; }
    
    return (result > 0) ? Math.floor(result) : Math.ceil(result);
};