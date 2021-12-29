/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = '';
  let current = '';
  s.split('').forEach(i => {
    if (!current.includes(i)) {
      current += i;
    } else {
      if (!longest || longest.length < current.length) {
        longest = current;
      }
      current = current.slice(current.indexOf(i) + 1) + i;
    }    
  });
  return Math.max(current.length, longest.length)
};