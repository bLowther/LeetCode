/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let ans = 0;
    let i = 0;
    
    while(s[i] === " ")
        i++;
    
    if(['1','2','3','4','5','6','7','8','9','0','-','+'].includes(s[i])){
        ans = s[i];
        i++;
        while(['1','2','3','4','5','6','7','8','9','0'].includes(s[i])){
            ans += s[i]
            i++;
        }
    }
    else
        return 0;
    
    ans  =  isNaN(ans) ? 0 : parseInt(ans);
    
    // return ans ? ans : 
    
    if(ans < -2147483648)
        return -2147483648;
    
    if(ans > 2147483647)
        return 2147483647;
    
    return ans;
};