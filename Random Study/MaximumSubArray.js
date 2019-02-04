let arr = [-1, 2, 4, -3, 5, 2, -5, 2]

let max = arr[0],
    curr_max = 0

for (let i = 0; i < arr.length; i++) {
    curr_max = Math.max(curr_max + arr[i], arr[i])
    max = Math.max(max, curr_max)
}

console.log(max)