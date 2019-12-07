import { Cost } from '../js/models/Cost';

test('Cost have to equal costObj', () => {
  const cost = new Cost({
    transportModel: 'Mercedes',
    costPerKg: 5,
    costPerKm: 2
  });
  const costCheck = {
    transportModel: 'Mercedes',
    costPerKg: 5,
    costPerKm: 2
  };

  expect(cost).toEqual(costCheck);
});
