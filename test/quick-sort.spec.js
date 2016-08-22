import test from 'tape';
import { quickSort } from '../src/quick-sort.js';


test('quickSort', (t) => {
  const unsorted = [5,1,4,2,3];
  const sorted   = [1,2,3,4,5];

  t.deepEqual(quickSort(unsorted), sorted);
  t.end();
});
