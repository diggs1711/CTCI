/**
 *  Determine if a string has all unique characters
 * 
 *  [2,4,5,7,9] => true
 * 
 *  [2,2,2,3,4] => false
 * 
 */
const UNIQUE = [2, 4, 5, 6, 3, 1, 7, 8, 9]
const RECURRENT = [2, 2, 3, 4, 6, 71]

function isUnique(array) {
    let hashMap = {}

    for (const num of array) {
        if (hashMap[num]) {
            return false;
        }
        hashMap[num] = true;
    }
    return true;
}

function withoutAdditionalDataStructure(array) {
    const sortedArray = array.sort()
    for (const ind in sortedArray) {
        if (binarySearch(sortedArray, Number(ind))) {
            return false;
        }
    }
    return true;
}

function binarySearch(array, index) {
    const target = array[index];
    return binarySearchRecur(array, target, index + 1, array.length - 1)
}

function binarySearchRecur(array, target, left, right) {
    const mid = Math.floor((left + right) / 2);

    if (target === array[mid]) {
        return true;
    }

    if (target < array[mid]) {
        binarySearchRecur(array, target, left, mid - 1)
    } else if (target > array[mid]) {
        binarySearchRecur(array, target, mid + 1, right)
    }

    return false;
}

console.log(isUnique(UNIQUE))
console.log(isUnique(RECURRENT))
console.log(withoutAdditionalDataStructure(UNIQUE))
console.log(withoutAdditionalDataStructure(RECURRENT))