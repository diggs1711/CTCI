/**
 * 
 * @param {Array} arr array of elements
 * 
 * [1,3,5] = [], [1], [3], [5], [1,3], [1,5]
 * 
 */
function generateSubsets(arr) {
    let result = []

    const generate = (idx, sub) => {
        if (idx === arr.length) return result.push(sub.slice())

        sub.push(arr[idx])
        generate(idx + 1, sub)
        sub.pop()
        generate(idx + 1, sub)
    }

    generate(0, [])
    return result
}

console.log(generateSubsets([1, 3, 5]))