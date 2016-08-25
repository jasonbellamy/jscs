/**
 * A binary search implementation
 *
 * @name binarySearch
 * @function
 * @param {Mixed} target the value to search the list for
 * @param {Array} xs the list to search
 * @param {Integer} start the index in the list to start the search at
 * @param {Integer} end the index in the list to end the search at
 * @returns {Integer} the index where the value was found.
 *
 * 1. If the start index is greater than the end index assume the item was not found.
 * 2. Get the median value of the list.
 * 3. If the target is less than the median value recursively call binarySearch but this time only search the first half of the list.
 * 4. If the target is greater than the median value recursively call binarySearch but this time only search the second half of the list.
 * 5. if the target is neither greater than, or less than the median value assume we found it in the list and return its index.
 */
function binarySearch(target, xs, start, end) {
  // 1.
  if (start > end) {
    return -1;
  }

  // 2.
  const median = Math.floor((start + end) / 2);
  const result = xs[median];

  // 3.
  if (target < result) {
    return binarySearch(target, xs, start, median - 1);
  }

  // 4.
  if (target > result) {
    return binarySearch(target, xs, median + 1, end);
  }

  // 5.
  return median;
}

export function search(x, xs) {
  return binarySearch(x, xs, 0, xs.length - 1);
}
