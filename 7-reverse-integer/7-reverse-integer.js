/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let revString = '';
  const string =  x.toString();
  let neg = false;
  if (x < 0) {
    neg = true;
  }
  for(let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }
  const result = Number.parseInt(revString)
  if(-(2**31) >= result || result >= 2**31 - 1) {
    return 0
  }
  if (neg) {
    return -result;
  }
  return result;
};