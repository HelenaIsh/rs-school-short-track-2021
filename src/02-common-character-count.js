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
  const obj = {};
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (letter in obj) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (letter in obj && obj[letter] > 0) {
      result++;
      obj[letter]--;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
