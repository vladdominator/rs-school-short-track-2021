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
  if (domains.length === 0) return {};
  const strObject = {};
  const newArr = [];
  const domains2 = domains;
  for (let i = 0; i < domains2.length; i++) {
    newArr.push(...domains2[i].split('.').reverse());
  }
  const str = `.${newArr[0]}`;
  let max = domains2[0];
  for (let i = 0; i < domains2.length; i++) {
    if (domains2[i] > max) {
      max = domains2[i];
    }
  }
  for (let i = 0; i < domains2.length; i++) {
    domains2[i] = `.${domains2[i].split('.').reverse().join('.')}`;
  }

  const maxLength = max.length;
  strObject[str] = domains2.length;
  let domainsLength = domains2.length;
  for (let i = 0; i < domains2.length; i++) {
    if (domains2[i].length === maxLength) {
      strObject[domains2[i]] = 1;
    } else {
      strObject[domains2[i]] = domainsLength--;
    }
  }

  return strObject;
}

module.exports = getDNSStats;
