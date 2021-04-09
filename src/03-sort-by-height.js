/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrResult = [];
  const arrReturn = [];
  arr.forEach((element) => {
    if (element !== -1) arrResult.push(element);
  });
  arrResult.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrReturn.push(-1);
    } else if (!arrReturn[i]) {
      arrReturn.push(arrResult[0]);
      arrResult.splice(0, 1);
    }
  }
  return arrReturn;
}

module.exports = sortByHeight;
