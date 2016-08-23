/**
 * An implementation of a linear search
 *
 * @name linearSearch
 * @function
 * @param {Mixed} x the value to search for
 * @param {Array} xs the list to search
 * @returns {Integer} the index of the item in the list
 *
 * 1. Loop over every item in the list.
 * 2. If the current item matches the item being searched for return the index.
 * 3. If none of the items in the list matched the item being searched for return null.
 */
export function linearSearch(x, xs) {
  // 1.
  for (let i = 0; i < xs.length; i++) {
    // 2.
    if (xs[i] === x) {
      return i;
    }
  }
  // 3.
  return null;
}
