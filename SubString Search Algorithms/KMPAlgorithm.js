/**
 * KMP Algorithm for sub string pattern matching
 * 
 * runs in linear time O(M + N), where M is the length of the pattern we are looking for 
 * and N is the length of the string we are looking in
 * 
 */


 /**
  * 
  * @param {String} pattern the pattern string we are looking for
  * @description method to create the LPS array which looks for suffixes that are also prefixes
  * 
  * eg. abcdrthabcjt => abc is a prefix that is also a suffix. Basically is the prefix anywhere else
  * in the string
  */

 function createLpsArray(pattern) {
    let result = [],
        patternMap = new Map()  

    for (let index = 0; index < pattern.length; index++) {
        const element = pattern[index];

        if(patternMap.has(element)) {
            result[index] = patternMap.get(element)
        } else {
            patternMap.set(element, index + 1);
            result[index] = 0;
        }

    }
 }