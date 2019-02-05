function generatePositions(board) {
    let count = 0
    const generate = (row, board) => {
        if (row === board.length) return count++

        for (let col = 0; col < board[0].length; col++) {
            //console.log(row, col)
            if (isValid(row, col, board)) {
                board[row][col] = 1;
                generate(row + 1, board)
                board[row][col] = 0;
            }
        }
        return false;
    }

    generate(0, board)
    return count;
}

class Board {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.board = new Array(rows)
    }

    create() {
        for (let index = 0; index < this.board.length; index++) {
            let col = new Array(this.cols).fill(0)
            this.board[index] = col
        }
        return this.board
    }
}
let n = 16;

let board = new Board(n, n).create()
console.log(generatePositions(board))

function isValid(row, col, board) {
    //check row
    for (let index = 0; index < board[row].length; index++) {
        if (board[row][index]) return false;
    }

    //check col
    for (let index = 0; index < board.length; index++) {
        if (board[index][col]) return false;
    }

    //check diagnol current position to top left
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
        if (board[r][c]) return false;
    }

    //check diagnol top right to current position
    for (let r = row, c = col; r >= 0 && c < board.length; r--, c++) {
        if (board[r][c]) return false;
    }

    return true
}