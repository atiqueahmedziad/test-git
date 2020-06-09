import functions from './function.js';

test('addtion check', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('subtract check', () => {
  expect(functions.subtract(5, 1)).toBe(4);
});
