/**
 * An implementation of insertionSort
 *
 * @name insertionSort
 * @function
 * @param {Array} xs the list to sort
 */
export function insertionSort(xs) {
  for (let i = 0; i < xs.length; i++) {
    for (let j = 0; j < i; j++) {
      if(xs[i] < xs[j]) {
        xs.splice(j, 0, xs.splice(i, 1)[0]);
      }
    }
  }

  return xs;
}
