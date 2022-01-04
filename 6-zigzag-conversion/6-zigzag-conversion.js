/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let letterHolder = new Array(numRows).fill('');
  const count = numRows - 1;
  let up = true;
  for(i = 0; i < s.length; i++) {
    let row = i % count
    if (row === 0) {
      up = !up
    }
    if(up) {
      letterHolder[count - row] += s[i]
    } else {
      letterHolder[row] += s[i]
    }
  }
  return letterHolder.reduce((x, y) => x + y)
};