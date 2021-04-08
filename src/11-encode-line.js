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
  if (str === '') return '';
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      arr.push([str[i]]);
    } else if (str[i] === arr[arr.length - 1][0]) {
      arr[arr.length - 1].push(str[i]);
    } else arr.push([str[i]]);
  }
  let result = '';
  arr.forEach((item) => {
    if (item.length > 1) {
      result += item.length + item[0];
    } else result += item[0];
  });
  return result;
}

module.exports = encodeLine;
