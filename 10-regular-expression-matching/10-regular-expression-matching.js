/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p || !p.length) {
      return !Boolean(s.length);
    }
    const match = s.length && (p[0] === s[0] || p[0] === '.');
    if (p.length > 1 && p[1] === '*') {
  		const case1 = isMatch(s, p.substring(2));
  		const case2 = match && isMatch(s.substring(1), p);
  		return case1 || case2;
    } else {
      return match && isMatch(s.substring(1), p.substring(1));
    }
};