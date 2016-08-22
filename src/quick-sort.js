/**
 * An implementation of quickSort
 *
 * @name quickSort
 * @function
 * @param {Array} xs the list to sort
 * @returns {Array} the sorted list
 *
 * 1. Set the last item in the list as the pivot.
 * 2. Compare all other items in the list against the pivot.
 * 3. If the item is less than the pivot push it in the left list.
 * 4. If the item is greater than the pivot push it in the right list.
 * 5. Recursively call quickSort again on the left and right lists and concat the result with the pivot.
 */
export function quickSort(xs) {
  if (xs.length < 2) {
    return xs;
  }

  // 1.
  const pivot = xs[xs.length - 1];
  const left = [];
  const right = [];

  // 2.
  for (let i = 0; i < xs.length - 1; i++) {
    if (xs[i] < pivot) {
      // 3.
      left.push(xs[i]);
    } else {
      // 4.
      right.push(xs[i]);
    }
  }

  // 5.
  return [...quickSort(left), pivot, ...quickSort(right)];
}
