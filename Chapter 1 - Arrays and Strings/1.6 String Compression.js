/**
 * 
 * @param {string} str uncompressed input string
 * @return {string} compressed string
 * 
 */

function compress(str) {
    let result = ""

    for (let index = 0; index < str.length; index++) {
        let count = 1,
            currentChar = str.charAt(index)
        while (str.charAt(index + 1) === currentChar) {
            index++
            count++
        }
        result += currentChar + count
    }
    return result.length < str.length ? result : str
}

console.log(compress("aabcccccaaa")) // a2b1c5a3
console.log(compress("aaaaaaaaaaa")) // a9
console.log(compress("abcdefghijkk")) //abcdefghijkk
console.log(compress("")) // ""