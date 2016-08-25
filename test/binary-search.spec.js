import test from 'tape';
import { search } from '../src/binary-search.js';


test('binarySearch', (t) => {
  const list = [1,2,3,4,5];

  t.deepEqual(search(-1, list), -1);
  t.deepEqual(search(-2, list), -1);
  t.deepEqual(search(1, list), 0);
  t.deepEqual(search(5, list), 4);
  t.deepEqual(search(6, list), -1);
  t.end();
});
