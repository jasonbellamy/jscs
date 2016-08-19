/**
 * An implementation of selectionSort
 *
 * @name selectionSort
 * @function
 * @param {Array} xs the list to sort
 *
 * 1. Set the first item in the loop as the minimum.
 * 2. Check each item in the list to see if its smaller than the minimum.
 * 3. If any item is smaller than the initial minimum set it as the new minimum.
 * 4. If any smaller item was found move it to the space before the initial minimum.
 * 5. Repeat 1 - 4 for every item in the list.
 */
export function selectionSort(xs) {
  for (let i = 0; i < xs.length; i++) {
    // 1.
    let min = i;

    for (let j = i + 1; j < xs.length; j++) {
      // 2.
      if (xs[j] < xs[i]) {
        // 3.
        min = j;
      }
    }

    // 4.
    if (i !== min) {
      xs.splice(i, 0, xs.splice(min, 1)[0]);
    }
  }
}
