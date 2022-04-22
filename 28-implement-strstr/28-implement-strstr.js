/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const length = needle.length
    if (length === 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + length) === needle) return i
    }
    return -1
};