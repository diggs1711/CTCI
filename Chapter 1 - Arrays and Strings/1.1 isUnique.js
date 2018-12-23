/**
 *  Determine if a string has all unique characters
 * 
 *  "abcdefghi" => true
 * 
 *  "abcdeefghi" => false
 * 
 */
const UNIQUE = "abcdefghi"
const RECURRENT = "abcdeefghi"
const RECURRENT2 = "banana"

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
console.log(isUnique(RECURRENT2))