/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrackets = ['(', '[', '{'];
    const closeingBrackets = [')', ']', '}'];
    let openOrder = [];
    for (let ele of s) {
        const open = openBrackets.includes(ele);
        const close = closeingBrackets.includes(ele);
        if (open) {
            openOrder.push(ele);
        }
        if (close) {
            const pairPosition = closeingBrackets.indexOf(ele);
            const openPair = openBrackets[pairPosition];
            const lastOpen = openOrder.length - 1;
            if(openPair === openOrder[lastOpen]) {
                openOrder.pop();
            } else {
                return false;
            }
        }
    } return openOrder.length > 0 ? false : true;  
};