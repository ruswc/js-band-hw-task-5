import { Truck } from '../js/models/Truck';

export function testFunction() {
  return 3;
}

export function defaultTruck() {
  const DEFAULT_TRUCK = new Truck({
    id: '321-542-860',
    model: 'KFO 354',
    licensePlate: 'AA 6324 II',
    producedYear: '2018',
    capacity: '50000',
    averageSpeed: '130',
    typeOfGas: 'gasoline'
  });

  return DEFAULT_TRUCK;
}
