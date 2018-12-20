/**
 * Replace all spaces in a string with %20
 * You are also given the true length of the string
 * and have enough space at the end to implement in place
 * 
 * e.g.
 * 
 * "Mr John Smith   " + 13 => "Mr%20John%20Smith"
 *   
 */

function URLify(str, len) {
    let index = str.length
    let res = str.split("")

    for (let i = len - 1; i >= 0; i--) {
        if (str[i] === " ") {
            res[index - 1] = "0"
            res[index - 2] = "2"
            res[index - 3] = "%"
            index = index - 3
        } else {
            res[index - 1] = res[i]
            index--;
        }
    }

    return res.join("")
}

console.log(URLify("Mr John Smith    ", 13))