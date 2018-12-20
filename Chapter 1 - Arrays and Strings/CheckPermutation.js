/**
 * Two strings, decide if one is permutation of the other
 * 
 * "god" "dog" => true
 * 
 * "god" "ball" => false
 */

function isPerm(str1, str2) {
	if (str1.length !== str2.length) return false;
	let hashMap = {};

	for (const char of str1) {
		hashMap[char] = true;
	}

	for (const char of str2) {
		if (!hashMap[char]) {
			return false;
		}
	}

	return true;
}

console.log(isPerm('god', 'dog'));
console.log(isPerm('god', 'ball')); // false
console.log(isPerm('serene wirephotos', 'reese witherspoon')); //true
