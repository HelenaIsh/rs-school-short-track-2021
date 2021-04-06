/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const subDomain = domain.split('.');
    let temp = '';
    const tempArr = [];
    for (let j = subDomain.length - 1; j >= 0; j--) {
      temp += `.${subDomain[j]}`;
      tempArr.push(temp);
    }
    for (let j = 0; j < tempArr.length; j++) {
      const resultDomain = tempArr[j];
      if (resultDomain in result) {
        result[resultDomain]++;
      } else {
        result[resultDomain] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
