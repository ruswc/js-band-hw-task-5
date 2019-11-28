import { Form } from './Form';

export class TruckForm extends Form {
  constructor(options) {
    super(options);
    this.licensePlate = options.licensePlate;
    this.typeOfGas = options.typeOfGas;
  }
}
