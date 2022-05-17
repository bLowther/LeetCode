/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const rowMap = new Array(9).fill().map(() => ({}));
    const columnMap = new Array(9).fill().map(() => ({}));
    const boxMap = new Array(9).fill().map(() => ({}));
    
    const validate = (i, j, n) => {
        if (rowMap[i][n]) return false;
        if (columnMap[j][n]) return false;
        const square = Math.floor(i / 3) * 3 + Math.floor((j / 3) % 3);
        if (boxMap[square][n]) return false;
        return true;
    };
    
    const update = (i, j, n, mark) => {
        const square = Math.floor(i / 3) * 3 + Math.floor((j / 3) % 3);   
        rowMap[i][n] = mark;
        columnMap[j][n] = mark;
        boxMap[square][n] = mark;
    };
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') update(i, j, board[i][j], true);
        }
    }
    
    const solve = (i,j) => {
        if (i >= 9 || j >= 9) return true;
        const spot = j === 8 ? [i + 1, 0] : [i, j + 1];

        if (board[i][j] === '.') {
            for (let n = 1; n <= 9; n++) {
                if (validate(i, j, n)) {
                    update(i, j, n, true);
                    board[i][j] = n.toString();
                    if (solve(spot[0], spot[1])) return true;
                    update(i, j, n, false);
                    board[i][j] = '.';
                }
            }
        } else {
            return solve(spot[0], spot[1]);
        }
    };
    solve(0, 0);   
};