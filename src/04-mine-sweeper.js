/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const vlad1 = matrix.map((element, i, map) => {
    const vlad2 = element.map((elementy, j) => {
      let count = 0;
      //  in the line
      if (map[i][j - 1]) count++;
      if (map[i][j + 1]) count++;
      //  under the line
      if (i - 1 >= 0 && map[i - 1][j - 1]) count++;
      if (i - 1 >= 0 && map[i - 1][j]) count++;
      if (i - 1 >= 0 && map[i - 1][j + 1]) count++;
      //  above the line
      if (i + 1 < map.length && matrix[i + 1][j - 1]) count++;
      if (i + 1 < map.length && matrix[i + 1][j]) count++;
      if (i + 1 < map.length && matrix[i + 1][j + 1]) count++;
      return count;
    });
    return vlad2;
  });
  return vlad1;
}

module.exports = minesweeper;
