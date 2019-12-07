import { Transport } from '../js/models/Transport';

test('New Transport = Transport', () => {
  const newTransport = new Transport({
    id: 3,
    model: 'Some',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100
  });
  const checkTransport = {
    unique: newTransport.unique,
    id: 3,
    model: 'Some',
    producedYear: 2019,
    capacity: 2000,
    averageSpeed: 100
  };
  expect(newTransport).toEqual(checkTransport);
});
