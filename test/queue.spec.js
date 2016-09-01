import test from 'tape';
import { queue } from '../src/queue.js';


test('queue', (t) => {
  const list = queue();

  t.deepEqual((list.enqueue(1), list.get()), [1])
  t.deepEqual((list.enqueue(2), list.get()), [1, 2])
  t.deepEqual((list.dequeue(), list.get()), [2])
  t.deepEqual((list.dequeue(), list.get()), [])
  t.end();
});
