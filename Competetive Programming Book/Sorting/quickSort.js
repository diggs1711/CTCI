/**
 * 
 * @param {Array} arr unsorted array
 * @description divide and conquer algorithm. Creates two empty holding array to hold values less 
 * than and greater than the pivot value, then recuursively sort the sub arrays
 * 1. pick a pivot value
 * 2. add all smaller elements to left array
 * 3. add larger elements to right array
 * 4. recursively sort left and right array
 * 5. join two arrays together
 */
function quickSort(arr) {
    if (arr.length == 0) return []

    let leftArr = [],
        rightArr = [],
        pivot = arr[0] //pick random element, makes running time on average nLogn

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < pivot) {
            leftArr.push(arr[index])
        } else {
            rightArr.push(arr[index])
        }
    }

    return quickSort(leftArr).concat(pivot, quickSort(rightArr))
}

let arr = [4, 5, 3, 21, 2, 444, 5, 44, 3231, 3443, 221]
let sorted = quickSort(arr)
console.log(sorted)