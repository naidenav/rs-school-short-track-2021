/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const partOfStr1 = str.substring(0, i);
    const partOfStr2 = str.substring(i + 1);
    arr.push(partOfStr1 + partOfStr2);
  }
  arr.sort((a, b) => b - a);
  return +arr[0];
}

module.exports = deleteDigit;
