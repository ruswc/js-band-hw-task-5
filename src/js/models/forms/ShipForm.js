import { Form } from './Form';

export class ShipForm extends Form {
  constructor(options) {
    super(options);
    this.serialNumberOrName = options.serialNumberOrName;
    this.countOfTeam = options.countOfTeam;
  }
}
