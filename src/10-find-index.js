/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function binarySearch(arr, val, start, end) {
    if (end < 1) return 0;
    const middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === val) return middle;
    if (end - 1 === start) {
      return arr[start] - val === 0 ? start : end;
    }
    if (val > arr[middle]) {
      return binarySearch(arr, val, middle, end);
    }
    if (val < arr[middle]) {
      return binarySearch(arr, val, start, middle);
    }
    return 1;
  }
  return binarySearch(array, value, 0, (array.length - 1));
}

module.exports = findIndex;
