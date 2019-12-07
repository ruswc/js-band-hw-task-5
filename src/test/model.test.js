import { Model } from '../js/models/Model';

test('Model have to equal modelObj', () => {
  const model = new Model({
    property: 'test'
  });
  const modelCheck = {
    property: 'test'
  };
  expect(model).toEqual(modelCheck);
});
