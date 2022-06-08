/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n < 0) return myPow(1 / x, -n);
    if(n % 2 === 0) {
        const y = myPow(x, n / 2);
        return y * y;
    } else {
        const y = myPow(x, (n - 1) / 2);
        return x * y * y
    }
};