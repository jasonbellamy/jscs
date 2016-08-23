import test from 'tape';
import { linearSearch } from '../src/linear-search.js';


test('linearSearch', (t) => {
  const list = [1,2,3,4,5];

  t.deepEqual(linearSearch(-1, list), null);
  t.deepEqual(linearSearch(1, list), 0);
  t.deepEqual(linearSearch(5, list), 4);
  t.deepEqual(linearSearch(6, list), null);
  t.end();
});
