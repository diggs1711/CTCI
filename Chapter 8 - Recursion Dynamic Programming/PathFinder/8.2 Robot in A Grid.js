class Point {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

function findPath(grid) {
    //const seen = new Map();
    let rows = grid.length,
        cols = grid[0].length,
        seen = new Set(),
        path = [],
        i = 1

    const findPathHelper = (row, col) => {
        if (row < 0 || col < 0 || row > rows - 1 || col > cols - 1) return false;
        if (grid[row][col] == "bad") return false;
        if (row == 0 && col == 0) {
            markElement(0, 0, "green")
            return true
        }
        const key = `row-${row} col-${col}`
        if (seen.has(key)) return false;
        seen.add(key)
        // const point = new Point(row, col)
        markElement(row, col, "blue")
        if (findPathHelper(row - 1, col) || findPathHelper(row, col - 1)) {
            //path.push(point)
            let time = 10000
            seen.add(key)
            window.setTimeout(() => {
                markElement(row, col, "green")
            }, 200 * i)
            i += 0.3
            return true;
        }

        //seen.set(`row-${row} col-${col}`, path)
        return false;
    }

    findPathHelper(rows - 1, cols - 1)
}

function markElement(row, col, color) {
    let square = document.getElementsByClassName(`col col-${col} row-${row}`)[0]
    square.classList.add(color)
    // if (row == rows - 1 && col === cols - 1) setTimeout(alert("winner"), 0)
}

function createGridStructure(rows, cols) {
    let gridEle = document.querySelector(".grid")

    for (let row = 0; row < rows; row++) {
        let rowEle = document.createElement("div");
        rowEle.className = `row row-${row}`;
        for (let col = 0; col < cols; col++) {
            let colEle = document.createElement("div")
            colEle.className = `col col-${col} row-${row}`
            rowEle.appendChild(colEle)
        }
        gridEle.appendChild(rowEle)
    }

    let grid = new Array(rows)
    for (let index = 0; index < rows; index++) {
        grid[index] = new Array(cols)
    }

    return grid;
}

function createBadCells(grid, rows, cols, n) {
    for (let i = 0; i < n; i++) {
        let badRow = Math.floor(Math.random() * rows)
        let badCol = Math.floor(Math.random() * cols)
        grid[badRow][badCol] = "bad"
        markElement(badRow, badCol, "red")
    }
}

let rows = 50,
    cols = 50,
    btn = document.getElementById("refresh"),
    grid = document.getElementById("grid")

btn.addEventListener("click", function () {
    grid.innerHTML = ""
    createGrid()
})

function createGrid() {
    let grid = createGridStructure(rows, rows)
    createBadCells(grid, rows, cols, 500)
    findPath(grid)
}

createGrid()