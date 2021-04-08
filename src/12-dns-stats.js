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
  const obj = {};
  domains.forEach((item) => {
    if (/\.[a-z]{2,3}$/.test(item)) {
      const dns = item.match(/\.[a-z]{2,3}$/);
      if (dns in obj) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }
    if (/^[a-z]{2,}\.[a-z]{2,3}$/.test(item)) {
      const dns = `${item.match(/\.[a-z]{2,3}$/)}.${item.match(/^[a-z]{2,}/)}`;
      if (dns in obj) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }
    if (/\.[a-z]{2,}\.[a-z]{2,3}$/.test(item)) {
      const dns = item.match(/\.[a-z]{2,3}$/) + item.match(/\.[a-z]{2,}/);
      if (dns in obj) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }
    if (/^[a-z]{2,}\.[a-z]{2,}\.[a-z]{2,3}$/.test(item)) {
      const dns = item.match(/\.[a-z]{2,3}$/) + item.match(/\.[a-z]{2,}\./) + item.match(/^[a-z]{2,}/);
      if (dns in obj) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }
  });
  return obj;
}

module.exports = getDNSStats;
