import test from 'tape';
import { stack } from '../src/stack.js';


test('stack', (t) => {
  const list = stack();

  t.deepEqual((list.push(1), list.get()), [1]);
  t.deepEqual(list.peak(1), 1);
  t.deepEqual((list.pop(), list.get()), []);

  t.deepEqual((list.push(1), list.get()), [1]);
  t.deepEqual((list.push(2), list.get()), [2, 1]);
  t.deepEqual((list.push(3), list.get()), [3, 2, 1]);
  t.deepEqual((list.pop(), list.get()), [2, 1]);
  t.deepEqual((list.pop(), list.get()), [1]);
  t.deepEqual((list.pop(), list.get()), []);
  t.end();
});
