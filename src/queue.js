/**
 * An implementation of a queue
 *
 * @name queue
 * @function
 * @returns {Object} bound queue methods
 */
export function queue() {
  const xs = [];

  return {
    get: () => xs,
    enqueue: enqueue.bind(enqueue, xs),
    dequeue: dequeue.bind(dequeue, xs),
  }
}

/**
 * Appends an value to the end of the queue
 *
 * @name enqueue
 * @function
 * @param {Array} xs the queue to use
 * @param {Mixed} x the value to append to the queue
 */
function enqueue(xs, x) {
  return xs.push(x);
}

/**
 * Removes value from the front of the queue
 *
 * @name dequeue
 * @function
 * @param {Array} xs the queue to use
 * @return {Mixed} the value that was removed from the list
 */
function dequeue(xs) {
  return xs.shift();
}
