import test from 'tape';
import { insertionSort } from '../src/insertion-sort.js';


test('insertionSort', (t) => {
  const unsorted = [5,1,4,2,3];
  const sorted   = [1,2,3,4,5];

  insertionSort(unsorted);

  t.deepEqual(unsorted, sorted);
  t.end();
});
