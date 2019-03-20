/**
 * 
 * @param {Array} arr array of elements
 * 
 * [1] = [1]
 * [1,2] = [1,2], [2,1]
 * [1,2,3] = [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
 * 
 * 
 * 
 */
function generatePermutations(arr) {
    let perms = []

    const generate = (perm) => {
        if (perm.length == arr.length) perms.push(perm.slice())

        for (const element of arr) {
            if (perm.includes(element)) continue
            perm.push(element)
            generate(perm)
            perm.pop()
        }
    }

    generate([])
    return perms;
}

console.log(generatePermutations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));