/**
 * 
 * @param {arr} arr arr must be an array of integers and the largest element must be small enough to 
 * be used as an array index
 */
function countingSort(arr) {
    let bookkeeping = []

    for (const num of arr) {
        bookkeeping[num] ? bookkeeping[num]++ : bookkeeping[num] = 1
    }

    let result = []
    for (let index = 0; index < bookkeeping.length; index++) {
        if (bookkeeping[index]) {
            while (bookkeeping[index] > 0) {
                result.push(index)
                bookkeeping[index]--
            }
        }
    }
    return result;
}

let arr = [1, 3, 6, 9, 9, 3, 5, 9]
countingSort(arr)