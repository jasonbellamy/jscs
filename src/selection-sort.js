/**
 * An implementation of selectionSort
 *
 * @name selectionSort
 * @function
 * @param {Array} xs the list to sort
 */
export function selectionSort(xs) {
  for (let i = 0; i < xs.length; i++) {
    let min = i;

    for (let j = i + 1; j < xs.length; j++) {
      if (xs[j] < xs[i]) {
        min = j;
      }
    }

    if (i !== min) {
      xs.splice(i, 0, xs.splice(min, 1)[0]);
    }
  }
}
