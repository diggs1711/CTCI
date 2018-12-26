/**
 * 
 * @param {[][]} matrix image respresented by n x n matrix
 * @return {[][]} rotated matrix
 * 
 */

function rotateMatrix(matrix) {
	let colLength = matrix.length - 1;

	for (let layer = 0; layer < matrix.length / 2; layer++) {
		let first = layer;
		let last = colLength - first;
		for (let index = first; index < last; index++) {
			let offset = index - first;
			let top = matrix[first][index]

			//left => top
			matrix[first][index] = matrix[last - offset][first]

			//bottom => left
			matrix[last - offset][first] = matrix[last][last - offset]

			//right => bottom
			matrix[last][last - offset] = matrix[index][last]

			//top => right
			matrix[index][last] = top;

		}
	}
	return matrix;
}

let matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

console.log(rotateMatrix(matrix));