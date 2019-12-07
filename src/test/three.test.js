import { testFunction, defaultTruck } from './fortest';


test('running testFunction() should returned 3', () => {
  expect(testFunction()).toBe(3);
});

test('defaultTruck have to return default truck', () => {
  const defTruck = defaultTruck();
  defTruck.unique = 0;
  expect(defTruck).toEqual({
    id: '321-542-860',
    model: 'KFO 354',
    licensePlate: 'AA 6324 II',
    producedYear: '2018',
    capacity: '50000',
    averageSpeed: '130',
    typeOfGas: 'gasoline',
    unique: 0
  });
});
