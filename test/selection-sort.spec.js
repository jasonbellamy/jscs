import test from 'tape';
import { selectionSort } from '../src/selection-sort.js';


test('selectionSort', (t) => {
  const unsorted = [4,3,2,5,1];
  const sorted   = [1,2,3,4,5];

  selectionSort(unsorted);

  t.deepEqual(unsorted, sorted);
  t.end();
});
