/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows < 2) {
    return s;
  }
  let letterHolder = [];
  const count = numRows - 1;
  let up = true;
  for(i = 0; i < s.length; i++) {
    let row = i % count;
    if (row === 0) {
      up = !up;
    }
    if(up) {
      if (letterHolder[count - row]) {
        letterHolder[count - row] += s[i];
      } else {
        letterHolder[count - row] = s[i];
      }
    } else {
      if (letterHolder[row]) {
        letterHolder[row] += s[i];
      } else {
        letterHolder[row] = s[i];
      }  
    }
  }
  return letterHolder.reduce((x, y) => x + y)
};