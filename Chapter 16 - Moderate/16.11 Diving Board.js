/**
 * 
 * @param {Number} k number of planks
 * @param {Number} short length of shorter plank
 * @param {Number} long length of longer plank
 */
function createBoardLengths(k, short, long) {
    if(k == 0) return []
    return generate(k, short, long, 0, new Set(), new Set())
}

/**
 * 
 * @param {Number} k numebr of planks
 * @param {Number} short length of shorter plank
 * @param {Number} long length of longer plank
 * @param {Number} total length of diving board
 * @param {Set} res Result
 * @param {Set} memo Memo table
 * @description has a O(2^N) without memo, as they're are two decisions. Either choose the 
 * shorter plank or the longer one. Each path goes to a depth of K. WIth memo, the time complexity
 * is O(K^2) 
 */
const generate = (k, short, long, total, res, memo) => {
    if(k === 0) {
        res.add(total)
        return total
    }
    const key = `${k} - ${total}`
    if(memo.has(key)) return

    //choose shorter
    generate(k-1, short, long, total + short, res, memo),
    //choose longer
    generate(k-1, short, long, total + long, res, memo)

    memo.add(key)
    return res
}

console.log(createBoardLengths(50, 10, 40))
