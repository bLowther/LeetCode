/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';
    for(let i = 2; i <= n; i++){result = createStr(result);}
    return result;
    
    function createStr(str){
       let say = ''; 
       let num = str[0];
       let count = 1;
       for(let i = 1; i < str.length; i++){
           if(str[i] === num){
               count++;
           } else {
               say += count + num;
               num = str[i];
               count = 1;
           }
       }
       say += count + num; 
       return say; 
    }
};