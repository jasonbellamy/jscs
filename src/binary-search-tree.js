export function binarySearchTree() {
  const xs = node(null, null, null);

  return {
    add: (x) => add.call(null, x, xs),
    contains: (x) => contains.call(null, x, xs),
    size: size.bind(null, xs)
  }
}

/**
 * Interface for an individual tree node
 *
 * @name node
 * @function
 * @param {Mixed} x the data to be stored inside of the node
 * @param {Object} y the left node
 * @param {Object} z the right node
 * @returns {Object} an individual node
 */
function node(x, y = null, z = null) {
  return {
    value: x,
    left: y,
    right: z
  };
}

/**
 * add
 *
 * @name add
 * @function
 * @param {Mixed} x the value to append to the tree
 * @param {Object} xs the tree to append the value to
 */
function add(x, xs) {
  if (!xs.value && !xs.left && !xs.right) {
    xs.value = x;
  }

  if (x < xs.value) {
    return !xs.left ? xs.left = node(x) : add(x, xs.left);
  }

  if (x > xs.value) {
    return !xs.right ? xs.right = node(x) : add(x, xs.right);
  }
}

/**
 * Search the tree for a value
 *
 * @name contains
 * @function
 * @param {Mixed} x the value to search the tree for
 * @param {Object} xs the tree to search
 * @returns {Bool}
 */
function contains(x, xs) {
  if (!xs) {
    return false;
  }

  if (x < xs.value) {
    return contains(x, xs.left);
  }

  if (x > xs.value) {
    return contains(x, xs.right);
  }

  return true;
}

/**
 * Counts and returns how many nodes are in the tree
 *
 * @name size
 * @function
 * @param {Object} xs the tree to count
 * @returns {Integer} the number of nodes in the tree
 */
function size(xs) {
  if (!xs) {
    return 0;
  }
  return 1 + size(xs.left) + size(xs.right);
}
