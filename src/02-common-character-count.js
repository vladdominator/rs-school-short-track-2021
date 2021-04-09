/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  let count = 0;
  let count2 = 1;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1]) count2++;
    else {
      count2 = 0;
    }
    let g = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        g++;
      }
    }
    if (g > count2 && g > 0) {
      count++;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
