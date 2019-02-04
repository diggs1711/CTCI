function MergeSort(arr) {
	//recursively partition array into smaller and smaller array until
	//array length is 1. The array is then "sorted" so you can merge it
	// with nearest pair
	function sort(l, r) {
		if (l < r) {
			const mid = (l + r) >> 1;
			sort(l, mid);
			sort(mid + 1, r);
			merge(l, mid, r);
		}
	}

	function merge(l, m, r) {
		//create temp array
		//and pointers
		let temp = new Array(r - l + 1),
			i = l,
			j = m + 1,
			k = 0;

		while (i <= m && j <= r) {
			if (arr[i] <= arr[j]) {
				temp[k] = arr[i];
				k++;
				i++;
			} else {
				temp[k] = arr[j];
				k++;
				j++;
			}
		}

		while (i <= m) {
			temp[k] = arr[i];
			k++;
			i++;
		}
		while (j <= r) {
			temp[k] = arr[j];
			k++;
			j++;
		}

		for (let index = l; index <= r; index++) {
			arr[index] = temp[index - l];
		}
	}

	sort(0, arr.length - 1);
}
let arr = [ 4, 2, 6, 73, 26, 43, 89, 43, 1, 2, 6, 32 ];
MergeSort(arr);
console.log(arr);
