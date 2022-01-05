/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let sum = 0;
  while (x !== 0) {
    sum = sum * 10 + x % 10
    x = Math.trunc(x / 10);
  }
  return sum < -2147483648 || sum > 2147483647 ? 0 : sum;
};