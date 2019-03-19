function createBoardLengths(k, short, long) {
    if(k == 0) return []

    return generate(k, short, long, 0, new Set(), new Set())
}

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
