/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let one = arr[0];
  let strResult = '';
  let g = 0;
  for (let i = 0; i < arr.length; i++) {
    if (one !== arr[i]) {
      if (g === 1) {
        strResult += one;
        g = 0;
      } else {
        strResult += g + one;
        g = 0;
      }
      one = arr[i];
    }
    if (one === arr[i]) {
      g++;
      if (i === arr.length - 1) {
        if (g === 1) {
          strResult += one;
        } else {
          strResult += g + one;
        }
      }
    }
  }
  return strResult;
}

module.exports = encodeLine;
