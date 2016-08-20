/**
 * An implementation of mergeSort
 *
 * @name mergeSort
 * @function
 * @param {Array} xs the list to sory
 * @returns {Array} the sorted list
 *
 * 1. Split the list in to 2 lists.
 * 2. Split those 2 lists in to 2 more lists recursively.
 * 3. Return the list once it only contains a single item.
 * 4. Compare each set of lists on the way back up the stack adding the smaller values from each to a new list in order.
 * 5. return a list made of the new sorted list and the remainder of items in either the left/right list.
 */
export function mergeSort(xs) {
  // 3.
  if (xs.length < 2) {
    return xs;
  }

  // 1.
  const center = Math.floor(xs.length / 2);
  const left = xs.slice(0, center);
  const right = xs.slice(center);

  // 2.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const xs = [];

  while (left.length && right.length) {
    // 4.
    if (left[0] < right[0]) {
      xs.push(left.shift());
    } else {
      xs.push(right.shift());
    }
  }

  // 5.
  return [...xs, ...left, ...right];
}
