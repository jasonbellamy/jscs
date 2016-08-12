/**
 * An implementation of an array list created using objects
 *
 * @name arrayList
 * @function
 * @returns {Object} utility methods on the array list
 */
export function arrayList() {
  const xs = {};

  return {
    push: push.bind(this, xs),
    pop: pop.bind(this, xs),
    get: get.bind(this, xs),
    delete: remove.bind(this, xs),
    get length() {
      return length.call(this, xs);
    }
  }
}

/**
 * Appends a value to the end of the list
 *
 * @name push
 * @function
 * @param {Object} xs the list to append the value to
 * @param {Mixed} x the value to append to the list
 */
function push(xs, x) {
  xs[length(xs)] = x;
}

/**
 * Removes the last element in the list
 *
 * @name pop
 * @function
 * @param {Object} xs the list to remove the element from
 * @returns {Mixed} the value of the removed element
 */
function pop(xs) {
  const x = xs[length(xs) - 1];
  return delete xs[length(xs) - 1], x;
}

/**
 * Returns the value at the provided index
 *
 * @name get
 * @function
 * @param {Object} xs the list to get the elements value from
 * @param {Integer} x the index of the element we want the value from
 * @returns {Mixed} the value at the found index
 */
function get(xs, x) {
  return xs[x];
}

/**
 * Deletes an element from the list and updates the indexes of all other elements
 *
 * @name remove
 * @function
 * @param {Object} xs the list to delete the element from
 * @param {Integer} x the index of the element to remove
 * @returns {Mixed} the value of the deleted element
 */
function remove(xs, x) {
  const y = delete xs[x];

  for (let i = x; i < length(xs); i++) {
    xs[i] = xs[i + 1];
  }

  return pop(xs), y;
}

/**
 * Returns the number of elements in the list
 *
 * @name length
 * @function
 * @param {Object} xs the list to check the length of
 * @returns {Integer} the legnth of the list
 */
function length(xs) {
  let counter = 0;

  for (let x in xs) {
    counter++;
  }

  return counter;
}
