import { Factory } from '../js/models/Factory';

test('Factory have to equal factoryObj', () => {
  const factory = new Factory({
    property: 'test'
  });
  const factoryCheck = {
    property: 'test'
  };
  expect(factory).toEqual(factoryCheck);
});
