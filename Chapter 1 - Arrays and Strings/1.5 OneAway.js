/**
 * 
 * @param {string} str1  original string
 * @param {string} str2 edited string 
 * @return {boolean} returns true if they are one edit away, otherwise false
 * 
 */

function oneEditAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false

    let s = new Set()
    for (const char of str1) {
        s.add(char)
    }

    for (const char of str2) {
        if (s.has(char)) {
            s.delete(char)
        }
    }

    return s.size > 1 ? false : true
}

//Test Cases
console.log(oneEditAway("pale", "ple")) //true
console.log(oneEditAway("pales", "pale")) //true
console.log(oneEditAway("pale", "bale")) //true
console.log(oneEditAway("pale", "bake")) //false
console.log(oneEditAway("pale", "pa")) //false
console.log(oneEditAway("", "")) //true
console.log(oneEditAway("banan", "banana")) //true