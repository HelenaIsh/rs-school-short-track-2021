/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {number}
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
function findNeighbours(matrix, i, j) {
  let neighbours = 0;
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if (x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length) {
        if (x !== i || y !== j) {
          if (matrix[x][y]) {
            neighbours++;
          }
        }
      }
    }
  }
  return neighbours;
}

function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i].push(findNeighbours(matrix, i, j));
    }
  }
  return result;
}

module.exports = minesweeper;
