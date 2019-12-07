import { Truck, DEFAULT_TRUCK } from '../js/models/Truck';


test('New Truck = Truck', () => {
  const newTruck = new Truck({
    id: 2,
    model: 'Volvo',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100,
    licensePlate: '456-123',
    typeOfGas: 'Gas'
  });
  const checkObjTruck = {
    unique: newTruck.unique,
    id: 2,
    model: 'Volvo',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100,
    licensePlate: '456-123',
    typeOfGas: 'Gas'
  };
  expect(newTruck).toEqual(checkObjTruck);
});

test('Def.Truck should be object', () => {
  expect(typeof DEFAULT_TRUCK).toBe('object');
});
