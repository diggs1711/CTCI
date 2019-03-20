function getMatchedWords(input, listOfWords) {
    if(!input || input.length == 0) return []
    return generateWords(input.toString(), listOfWords, 0, "", [])
}

function generateWords(input, listOfWords, idx, str, result) {
    if(idx >= input.length) {
        if(listOfWords.includes(str)) {
            result.push(str)
        }
        return
    }

    let currentDigit = input[idx],
        mappedLetters = getMappedLetters(currentDigit)

    for(let letter of mappedLetters) {
        generateWords(input, listOfWords, idx+1, str + letter, result)
    }

    return result
}

function getMappedLetters(digit) {
    if(!digit || digit < 0 || digit > 9) return null

    let map = {
        0: [],
        1: [],
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    return map[digit]
}

console.log(getMatchedWords(87336787677865, ["tree", "used", "more"]))