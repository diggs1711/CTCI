NumberMap = {
    1 : [],
    2 : ["a", "b" , "c"],
    3 : ["d", "e" , "f"],
    4 : ["g", "h" , "i"],
    5 : ["j", "k" , "l"],
    6 : ["m", "n" , "o"],
    7 : ["p", "q" , "r", "s"],
    8 : ["t", "u" , "v"],
    9 : ["w", "x" , "y", "z"],
}

function matchedWords(digits, validWords) {
    let result = []

    const generate = (idx, s) => {
        if(idx === digits.toString().length) {
            if(validWords.includes(s)) result.push(s)
            return
        }

        let digit = String(digits).charAt(idx)
        let letters = NumberMap[digit]

        for(let letter of letters) {
            generate(idx+1, s + letter)
        }
    }

    generate(0, "")
    return result
}

validWords = ["tree", "used", "development"]
console.log(matchedWords(33835676368, validWords))

