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
  const indexesOfMinusOne = [];
  const tempArr = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexesOfMinusOne.push(i);
    } else {
      tempArr.push(arr[i]);
    }
  }
  tempArr.sort((a, b) => (a - b));
  for (let i = 0; i < arr.length; i++) {
    if (indexesOfMinusOne.includes(i)) {
      result[i] = -1;
    } else {
      [result[i]] = [...tempArr];
      tempArr.shift();
    }
  }
  return result;
}

module.exports = sortByHeight;
