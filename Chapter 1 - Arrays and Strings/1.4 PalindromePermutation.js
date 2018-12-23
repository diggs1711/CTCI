/**
 * check if a string is permutation of a palindrome 
 * 
 * input: Tact Coa
 * 
 * output: True => "taco cat" is a palindrome 
 * 
 * 
 * Naive solution is to calculate all permutations => O(n!)
 * 
 * Iproved Solution => Count up all occurances of each letter. 
 *                     Every letter should appear twice apart 
 *                     from one letter 
 *                  => O(n) time comlexity
 *  
 */

const str = "Tact Coa"
const notPalindrome = "Hello Motel"

function isPerm(str) {
    let hashMap = {}
    let count = 0
    str = str.toLowerCase()

    for (const letter of str) {
        if (letter !== ' ') {
            if (hashMap[letter]) {
                count--
            } else {
                count++
                hashMap[letter] = true
            }
        }
    }

    return count === 1
}

console.log(isPerm(str)) // true
console.log(isPerm(notPalindrome)) // false