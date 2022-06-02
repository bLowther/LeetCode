/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length - 1;
    let start = 0;
    while(start < size) {
        let r = start + 1;
        let l = size - 1;
        const top = matrix[start];
        const bottom = matrix[size];
        const right = matrix.flatMap(row => row[size]);
        const left = matrix.flatMap(row => row[start]);
        
        matrix[start][start] = left[size];
        matrix[start][size] = left[start];
        matrix[size][size] = right[start];
        matrix[size][start] = right[size];
        
        while (r <= l) {
            matrix[r][size] = top[r];
            matrix[l][size] = top[l];
            matrix[r][start] = bottom[r];
            matrix[l][start] = bottom[l];
            matrix[start][r] = left[l];
            matrix[start][l] = left[r];
            matrix[size][r] = right[l];
            matrix[size][l] = right[r];

            r++;
            l--;
        }       
        start++;
        size--;
    }
};