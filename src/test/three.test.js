// const testFunction = require('../js/common');
import { testFunction, testFunction2 } from './test';

test('running testFunction() should returned 3', () => {
  expect(testFunction()).toBe(3);
});

test('running testFunction2() should returned 5', () => {
  expect(testFunction2()).toBe(5);
});
