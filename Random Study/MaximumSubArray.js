let arr = [-1, 2, 4, -3, 5, 2, -5, 2]

//max is the "global max"
//current max is either the maximum sum up until that element plus the elemnent itself 
//or the the current element is the maximum sum. if the previous elements were negative
// the current element by itself could be the maximum
let max = arr[0],
    curr_max = 0


for (let i = 0; i < arr.length; i++) {
    //get the max of the largest sum up to the current element
    curr_max = Math.max(curr_max + arr[i], arr[i])
    //update the global max
    max = Math.max(max, curr_max)
}

console.log(max)