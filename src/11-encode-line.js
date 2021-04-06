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
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (i < str.length - 1 && str[i + 1] === letter) {
      count++;
    } else {
      if (count === 1) {
        result += letter;
      } else {
        result += `${count}${letter}`;
      }
      count = 1;
    }
  }
  return result;
}

module.exports = encodeLine;
