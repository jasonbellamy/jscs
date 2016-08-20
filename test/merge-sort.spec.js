import test from 'tape';
import { mergeSort } from '../src/merge-sort.js';


test('mergeSort', (t) => {
  const unsorted = [5,1,4,2,3];
  const sorted   = [1,2,3,4,5];

  t.deepEqual(mergeSort(unsorted), sorted);
  t.end();
});
