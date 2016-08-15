import test from 'tape';
import { binarySearchTree } from '../src/binary-search-tree.js';


test('contains', (t) => {
  const nums = [3,7,4,6,5,1,10,2,9,8];
  const tree = binarySearchTree();
  nums.map(tree.add);

  t.equals(tree.contains(-1), false);
  t.equals(tree.contains(0), false);
  t.equals(tree.contains(1), true);
  t.equals(tree.contains(2), true);
  t.equals(tree.contains(3), true);
  t.equals(tree.contains(4), true);
  t.equals(tree.contains(5), true);
  t.equals(tree.contains(6), true);
  t.equals(tree.contains(7), true);
  t.equals(tree.contains(8), true);
  t.equals(tree.contains(9), true);
  t.equals(tree.contains(10), true);
  t.equals(tree.contains(11), false);
  t.end();
});

test('size', (t) => {
  const nums = [3,7,4,6,5,1,10,2,9,8];
  const tree = binarySearchTree();
  nums.map(tree.add);
  t.equals(tree.size(), 10);
  tree.add(11);
  t.equals(tree.size(), 11);
  t.end();
});

