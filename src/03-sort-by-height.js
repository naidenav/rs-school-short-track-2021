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
  const reverseSort = [...arr];
  reverseSort.sort((a, b) => b - a);
  while (reverseSort[reverseSort.length - 1] === -1) {
    reverseSort.pop();
  }
  let index = reverseSort.length;
  const result = arr.map((item) => {
    if (item === -1) {
      return -1;
    }
    index--;
    return reverseSort[index];
  });
  return result;
}

module.exports = sortByHeight;
