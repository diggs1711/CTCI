/**
 * 
 * @param {Int} steps number of steps on the staircase
 * @description O(N) solution using memoization
 */
function numWays(steps, memo) {
    if (steps < 0) {
        return 0
    }
    if (steps <= 0) {
        return 1
    }

    if (memo.get(steps)) {
        return memo.get(steps)
    }

    const ways = numWays(steps - 1, memo) + numWays(steps - 2, memo) + numWays(steps - 3, memo)
    memo.set(steps, ways)
    return memo.get(steps)
}

console.log(numWays(500, new Map()))