/**
 * @param {[][]} grid matrix that contains ponds and land
 */
function getPondSizes(grid) {
    if(!grid || grid.length == 0) return []

    let rows = grid.length,
    cols = grid[0].length,
    result = [],
    seen = new Set()

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if(grid[row][col] == 0 && !seen.has(`row-${row} col-${col}`)) {
                result.push(calculatePondSize(row, col, rows, cols, seen))
            }
        }
    }
    return result;
}

/**
 * 
 * @param {number} row current row in matrix
 * @param {number} col current col in matrix
 * @param {number} rows max number of rows
 * @param {number} cols max number of cols
 * @param {Set} seen set of cells already visited
 */
function calculatePondSize(row, col, rows, cols, seen) {
    if(row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] != 0) {
        return 0
    }
    let key = `row-${row} col-${col}`
    if(seen.has(key)) return 0
    seen.add(key)

    let moves = [[-1, 0],//up
                [-1, -1],//up left
                [0, -1],//left
                [1, -1],//down left
                [1, 0], //down
                [1, 1], //down right
                [0, 1], //right
                [-1, 1] //up right
            ],
            size = 0

    for(let [r, c] of moves) {
        let newRow = row + r,
            newCol = col + c
        size += calculatePondSize(newRow, newCol, rows, cols, seen)
    }
    
    return size + 1
}

let grid = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
]

console.log(getPondSizes(grid))