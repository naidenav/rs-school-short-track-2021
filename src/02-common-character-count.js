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
  const char = {};
  let min;
  let max;
  if (s1.length >= s2.length) {
    min = s2;
    max = s1;
  } else {
    min = s1;
    max = s2;
  }
  for (let i = 0; i < min.length; i++) {
    if (min[i] in char) {
      char[min[i]]++;
    } else char[min[i]] = 1;
  }
  let result = 0;
  for (let i = 0; i < max.length; i++) {
    if (max[i] in char) {
      result += 1;
      if (char[max[i]] === 1) {
        delete char[max[i]];
      } else char[max[i]]--;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
