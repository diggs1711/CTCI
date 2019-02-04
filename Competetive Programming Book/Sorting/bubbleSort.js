function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            //"bubble" largest element to top each round
            // there are N rounds, so after N rounds 
            if (arr[j] > arr[j + 1]) swap(j, j + 1)
        }
    }

    function swap(i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}

console.log(bubble([-1, 4, 87, 4, 54, 32, 18, 2, 3, 7]))