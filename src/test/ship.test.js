import { Ship, saveShip } from '../js/models/Ship';

import { Controller } from '../js/controller/Controller';

test('New Ship = Ship', () => {
  const newShip = new Ship({
    id: 1,
    model: 'XL',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100,
    snName: '456-123',
    countOfTeam: 100
  });
  const checkObj = {
    unique: newShip.unique,
    id: 1,
    model: 'XL',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100,
    snName: '456-123',
    countOfTeam: 100
  };
  expect(newShip).toEqual(checkObj);
});

test('saveShip should be a function', () => {
  expect(typeof saveShip).toBe('function');
});
