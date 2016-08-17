/**
 * A bubble sort implementation using 2 for loops
 *
 * @name bubbleSort
 * @function
 * @param {Array} xs the list to sort
 */
export function bubbleSortOne(xs) {
  for (let i = 0; i < xs.length; i++) {
    for (let j = 0; j < xs.length - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        xs.splice(j, 0, xs.splice(j + 1, 1)[0]);
      }
    }
  }
}

/**
 * A bubble sort implementation using a do while & for loop.
 *
 * @name bubbleSort
 * @function
 * @param {Array} xs the list to sort
 */
export function bubbleSortTwo(xs) {
  let swap;

  do {
    swap = false;
    for (let i = 0; i < xs.length; i++) {
      if (xs[i] > xs[i + 1]) {
        xs.splice(i, 0, xs.splice(i + 1, 1)[0]);
        swap = true;
      }
    }
  } while(swap);
}
