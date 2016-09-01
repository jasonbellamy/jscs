/**
 * An implementation of a stack
 *
 * @name stack
 * @function
 * @returns {Object} bound stack methods
 */
export function stack() {
  const xs = [];

  return {
    get: () => xs,
    peak: peak.bind(peak, xs),
    pop: pop.bind(pop, xs),
    push: push.bind(pop, xs)
  };
}

/**
 * Pushes (adds) a value on to the head of the stack
 *
 * @name push
 * @function
 * @param {Array} xs the list to push the item on to
 * @param {Mixed} x the value to push on to the stack
 */
function push(xs, x) {
  return xs.unshift(x);
}

/**
 * Pops (removes) the item at the head of the stack
 *
 * @name pop
 * @function
 * @param {Array} xs the stack to remove the item from
 * @returns {Mixed} the value that was removed from the stack
 */
function pop(xs) {
  return xs.shift();
}

/**
 * View the value of the item at the head of the stack
 *
 * @name peak
 * @function
 * @param {Array} xs the stack to view item from
 * @returns {Mixed} the value at the head of the stack
 */
function peak(xs) {
  return xs[0];
}
