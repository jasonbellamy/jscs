import test from 'tape';
import { range } from '../src/util/range.js';
import { arrayList } from '../src/array-list.js';


const alphabet = range(97, (97 + 25)).map(x => String.fromCharCode(x));

test('push', (t) => {
  const list = arrayList();
  alphabet.map(x => list.push(x));

  t.equal(list.length, 26);
  t.end();
});

test('pop', (t) => {
  const list = arrayList();
  alphabet.map(x => list.push(x));
  list.pop();

  t.equal(list.length, 25);
  t.equal(list.pop(), 'y');
  t.end();
});

test('get', (t) => {
  const list = arrayList();
  alphabet.map(x => list.push(x));

  t.equal(list.get(2), 'c');
  t.equal(list.get(26), undefined);
  t.equal(list.get(-1), undefined);
  t.end();
});

test('delete', (t) => {
  const list = arrayList();
  alphabet.map(x => list.push(x));

  list.delete(13);
  t.equal(list.length, 25);
  t.equal(list.get(12), 'm');
  t.equal(list.get(13), 'o');

  list.delete(0);
  t.equal(list.length, 24);
  t.equal(list.get(0), 'b');

  t.end();
});
