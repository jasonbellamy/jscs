/**
 * An implementation of insertionSort
 *
 * @name insertionSort
 * @function
 * @param {Array} xs the list to sort
 *
 * 1. Assume the first item is sorted.
 * 2. Check each item in the list to see if its smaller than the first item.
 * 3. If any smaller item was found insert it in the space before the first item.
 * 4. Repeat 1 - 3 for every other item in the list.
 */
export function insertionSort(xs) {
  // 1.
  for (let i = 1; i < xs.length; i++) {
    for (let j = 0; j < i; j++) {
      // 2.
      if(xs[i] < xs[j]) {
        // 3.
        xs.splice(j, 0, xs.splice(i, 1)[0]);
      }
    }
  }

  return xs;
}
