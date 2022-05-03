/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const makeBox = (num) => {
        let x = 3 * Math.floor(num/3);
        let y = num%3 * 3;
        let z = 0;
        let box = []
        while (z < 3) {
            box = box.concat(board[x+z].slice(y,y+3));
            z++
        }
        return box;
    }
    const valid = (array) => {
        const filtered = array.filter(ele => ele !== '.').sort();
        for(let i = 0; i < filtered.length-1; i++) {
            if(filtered[i] === filtered[i+1]) return false
        }
        return true
    }
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        let col = []
        board.forEach(ele => col.push(ele[i]));
        let box = makeBox(i);
        if(!valid(row) || !valid(col) || !valid(box)) return false
    }
    return true;
};