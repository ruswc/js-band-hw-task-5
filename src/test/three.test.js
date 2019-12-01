import { testFunction } from './fortest';

test('running testFunction() should returned 3', () => {
  expect(testFunction()).toBe(3);
});
