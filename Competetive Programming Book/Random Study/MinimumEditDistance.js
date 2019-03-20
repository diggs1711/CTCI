/**
 * Measure the difference between two sequences
 * 
 * kitten => sitting = 3 
 * 
 *  kitten → sitten (substitution of “s” for “k”)
    sitten → sittin (substitution of “i” for “e”)
    sittin → sitting (insertion of “g” at the end)

             0    1     2
            ""  "M"   "E"
    0 ""    0    1     2

    1 "M"   1    0     1

    2 "E"   2    1     1

    Cell(0,1) is 1. This means we need one operatin(deletion) to transform "m" to an empty string
    Cell(1,0) is 1. this means we need one operation (insertion) to transform "" to "M"
 */


function editDistanceRecursive(str1, str2) {
    const editDistanceHelper = (len1, len2, mem) => {
        //if one string is empty, the cost of transforming
        //the other string into the empty string is the length
        //of the other string. eg if str1 = "" and str2 = "dog"
        //then cost = 3
        if (len1 == 0) return len2
        if (len2 == 0) return len1

        if (!mem[len1][len2]) {
            const cost = str1.charAt(len1 - 1) === str2.charAt(len2 - 1) ? 0 : 1

            const result = Math.min(editDistanceHelper(len1 - 1, len2, mem) + 1, //cost of deleting a character from s1
                editDistanceHelper(len1, len2 - 1, mem) + 1, //cost of deleting a character from s2
                editDistanceHelper(len1 - 1, len2 - 1, mem) + cost) // cost of deleting a character from both

            mem[len1][len2] = result
            return result
        }
        return mem[len1][len2]
    }

    let mem = Array(str2.length).fill(null).map(() => Array(str1.length).fill(null))
    const r = editDistanceHelper(str1.length, str2.length, mem)
    return r;
}

console.log(editDistanceRecursive("kitten", "sitting"))
//console.log(editDistanceRecursive("saturdaydidiimcuaolfkoalllqpa", "sundaydkdkjgjskslskldkkkkalrurnwciiiw"))

function minEditDistanceIterative(str1, str2) {

}