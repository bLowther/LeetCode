/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if( num1 === '0' || num2 === '0' ) return '0';
    let store = [];
    let i = 1;
    let j = i;

    while ( num2[ num2.length-i ] ) {
        let n2 = num2[ num2.length-i ] || 0;
        let carried = 0;
        while ( num1[ num1.length-j ] ) {
            let n1 = num1[ num1.length-j ] || 0;
            let total = n1 * n2 + carried ;
            let p = i + j;
            store[p] = store[p] || 0;
            store[p] = total + store[p];
            carried = Math.floor( store[p] / 10  );
            store[p] = store[p] % 10;
            j++;
        }
        if ( carried ) store.push( carried );
        i++;
        j=1;
    }
    return store.reverse().join('');
};