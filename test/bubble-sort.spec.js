import test from 'tape';
import { bubbleSortOne, bubbleSortTwo } from '../src/bubble-sort.js';


test('bubbleSortOne', (t) => {
  const unsorted = [5,4,3,2,1];
  const sorted   = [1,2,3,4,5];

  bubbleSortOne(unsorted);

  t.deepEqual(unsorted, sorted);
  t.end();
});

test('bubbleSortTwo', (t) => {
  const unsorted = [5,4,3,2,1];
  const sorted   = [1,2,3,4,5];

  bubbleSortTwo(unsorted);

  t.deepEqual(unsorted, sorted);
  t.end();
});
