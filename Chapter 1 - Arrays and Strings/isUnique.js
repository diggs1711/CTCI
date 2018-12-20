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

console.log(isUnique(UNIQUE))
console.log(isUnique(RECURRENT))