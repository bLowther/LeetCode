/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';
  const centeredPalindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  };
  for (let i = 0; i < s.length; i++) {
    let oddPal = centeredPalindrome(i - 1, i + 1);
    let evenPal = centeredPalindrome(i, i + 1);

    if (oddPal.length > result.length) {
      result = oddPal;
    }
    if (evenPal.length > result.length) {
      result = evenPal;
    }
  }
  return result;
};