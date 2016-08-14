/**
 * An implementation of a singly linked list
 *
 * @name linkedList
 * @function
 * @returns {Object} utility methods on the linked list
 */
export function linkedList() {
  const head = {};
  let length = 0;

  return {
    push: (x) => {
      return length++, push.call(null, x, head);
    },
    pop: () => {
      return length--, pop.call(null, length, head);
    },
    delete: (x) => {
      const y = remove.call(null, x, head);
      return y && length--, y;
    },
    get: (x) => {
      return get.call(null, x, head);
    },
    get length() {
      return length
    }
  }
}

/**
 * Interface for an individual node
 *
 * @name node
 * @function
 * @param {Mixed} x the data to be stored inside of the node
 * @returns {Object} an individual node
 */
function node(x) {
  return {
    data: x,
    next: null
  };
}

/**
 * Appends a value to the end of the list
 *
 * @name push
 * @function
 * @param {Mixed} x the value to append to the list
 * @param {Object} xs the list to append the value to
 */
function push(x, xs) {
  return findNext(xs).next = node(x);
}

/**
 * Removes the last element in the list
 *
 * @name pop
 * @function
 * @param {Integer} x the length of the list
 * @param {Object} xs the list to remove the element from
 * @returns {Mixed} the value of the removed element
 */
function pop(x, xs) {
  const node = find(x - 1, xs);
  const data = node.next.data;

  return node.next = null, data;
}

/**
 * Returns the value at the provided index
 *
 * @name get
 * @function
 * @param {Integer} x the index of the element we want the value from
 * @param {Object} xs the list to get the elements value from
 * @returns {Mixed} the value at the found index
 */
function get(x, xs) {
  const node = find(x, xs);

  if (node) {
    return node.data;
  }
}

/**
 * Deletes an element from the list and updates the indexes (next) of all other elements
 *
 * @name remove
 * @function
 * @param {Integer} x the index of the element to remove
 * @param {Object} xs the list to delete the element from
 * @returns {Mixed} the value of the deleted element
 */
function remove(x, xs) {
  const node = find(x - 1, xs);

  if (node.next.next) {
    const data = node.next.data;
    node.next = node.next.next;

    return data;
  }
}

/**
 * Find the last node in the list
 *
 * @name findNext
 * @function
 * @param {Object} xs the list to search
 * @returns {{Object}} the last node in the list
 */
function findNext(xs) {
  return xs.next ? findNext(xs.next) : xs;
}

/**
 * Find a node in the list
 *
 * @name find
 * @function
 * @param {Integer} x the index of the node to find
 * @param {Object} xs the list to search
 * @returns {Object} the found node
 */
function find(x, xs) {
  return (function next(node, start, end) {
    return start <= end ? next(node.next, start + 1, end) : node;
  })(xs, 0, x);
}
