/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function sumSwap(arr1, arr2) {
    if(!arr1 || arr1.length == 0 || !arr2 || arr2.length == 0) {
        return []
    }

    let sum1 = getTotalSum(arr1),
        sum2 = getTotalSum(arr2),
        diff = Math.abs(sum1 - sum2),
        set1 = new Set()
    
    for(let num of arr1) {
        set1.add(num)
    }

    for(let num of arr2) {
        let numToFind = diff - num
        if(set1.has(numToFind)) {
            return [numToFind, num]
        }
    }

    return []
}

/**
 * 
 * @param {Array} arr array of numbers to add
 * @returns {Number} sum
 */
function getTotalSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumSwap([3,6,3,3], [4,1,2,1,1,2]))