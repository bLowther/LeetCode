/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const backtrack = (permutations, currentPermutation, open, closed) => {
    if (currentPermutation.length === n*2) {
      permutations.push(currentPermutation);
      return;
    }
    if (open < n) backtrack(permutations, `${currentPermutation}(`, open + 1, closed);
    if (closed < open) backtrack(permutations, `${currentPermutation})`, open, closed + 1);
  };
  
  const permutations = [];
  backtrack(permutations, '', 0, 0);
  
  return permutations;
};