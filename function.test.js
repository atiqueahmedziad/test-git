import functions from './function.js';

test('addtion check', () => {
  expect(functions.add(2, 3)).toBe(5);
});

test('multiply check', () => {
  expect(functions.multiply(2, 3)).toBe(6);
});
