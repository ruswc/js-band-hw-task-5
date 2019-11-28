import { TransportFormFactory } from '../models/forms/TransportFormFactory';
// import {saveShip} from '../models/Transport'
// import {saveTruck} from '../models/Transport'
import { saveCost } from '../models/Cost';
import { saveShip } from '../models/Ship';
import { saveTruck } from '../models/Truck';

export class ViewForm {
  constructor() {

    // The root element for forms
    this.app = this._getElement('#forms');

    this.factory = new TransportFormFactory();
    this.shipForm = this.factory.create('ship');

    // The title of the app
    this.title = this._createElement('h3');
    this.title.textContent = this.shipForm.formHeader;

    // The form, with a [type="text"] input, and a submit button
    this.sForm = this._createElement('form');
    this.sForm.id = this.shipForm.formId;
    this.sForm.append(this.title);

    // create input for id
    this.shipIdLabel = this._createLabel(this.shipForm.transportId, 'Input id');
    this.shipIdInput = this._createInput(this.shipForm.transportId, 'text', 'Input id');

    // create model selector
    this.shipModelLabel = this._createLabel(this.shipForm.model, 'Select Model');
    this.shipModelSelector = this._createSelect(this.shipForm.model);
    this.shipModelSelectorOptions = this._createOptions(['small', 'middle', 'big', 'xl']);
    this.shipModelSelector.append(...this.shipModelSelectorOptions);


    // create input for SN
    this.serialNumberLabel = this._createLabel(this.shipForm.serialNumberOrName, 'Serial Number / Name');
    this.serialNumber = this._createInput(this.shipForm.serialNumberOrName, 'text', 'Serial Number / Name');

    // create input for prod. year
    this.shipProducedYearLabel = this._createLabel(this.shipForm.producedYear, 'Produced Year');
    this.shipProducedYear = this._createInput(this.shipForm.producedYear, 'text', 'Produced Year');

    // create input for capacity
    this.shipCapacityLabel = this._createLabel(this.shipForm.capacity, 'Capacity');
    this.shipCapacity = this._createInput(this.shipForm.capacity, 'text', 'Capacity');

    // create input for avg speed
    this.averageSpeedLabel = this._createLabel(this.shipForm.averageSpeed, 'Average Speed');
    this.averageSpeed = this._createInput(this.shipForm.averageSpeed, 'text', 'Average Speed');

    // create count of team input
    this.countOfTeamLabel = this._createLabel(this.shipForm.countOfTeam, 'Count Of Team');
    this.countOfTeam = this._createInput(this.shipForm.countOfTeam, 'text', 'Count ofTeam');

    // create save button
    this.shipSubmitButton = this._createElement('button');
    this.shipSubmitButton.id = 'saveship';
    this.shipSubmitButton.textContent = 'Save';

    this.sForm.append(this.shipIdLabel, this.shipIdInput, this.shipModelLabel, this.shipModelSelector, this.serialNumberLabel, this.serialNumber, this.shipProducedYearLabel, this.shipProducedYear, this.shipCapacityLabel, this.shipCapacity, this.averageSpeedLabel, this.averageSpeed, this.countOfTeamLabel, this.countOfTeam, this.shipSubmitButton);
    this.app.append(this.sForm);


    // truck factory
    this.factory = new TransportFormFactory();
    this.truckForm = this.factory.create('truck');

    // The title of the app
    this.truckTitle = this._createElement('h3');
    this.truckTitle.textContent = this.truckForm.formHeader;

    // The form
    this.truckFrm = this._createElement('form');
    this.truckFrm.id = this.truckForm.formId;
    this.truckFrm.append(this.truckTitle);

    // create input for id
    this.truckIdLabel = this._createLabel(this.truckForm.transportId, 'Input id');
    this.truckIdInput = this._createInput(this.truckForm.transportId, 'text', 'Input id');

    // create model selector
    this.truckModelLabel = this._createLabel(this.truckForm.model, 'Select Model');
    this.truckModelSelector = this._createSelect(this.truckForm.model);
    this.truckModelSelectorOptions = this._createOptions(['MAN', 'Ford', 'Volvo', 'Mercedes']);
    this.truckModelSelector.append(...this.truckModelSelectorOptions);


    // create input for license plate
    this.licensePlateLabel = this._createLabel(this.truckForm.licensePlate, 'License Plate');
    this.licensePlate = this._createInput(this.truckForm.licensePlate, 'text', 'License Plate');

    // create input for prod. year
    this.truckProducedYearLabel = this._createLabel(this.truckForm.producedYear, 'Produced Year');
    this.truckProducedYear = this._createInput(this.truckForm.producedYear, 'text', 'Produced Year');

    // create input for capacity
    this.truckCapacityLabel = this._createLabel(this.truckForm.capacity, 'Capacity');
    this.truckCapacity = this._createInput(this.truckForm.capacity, 'text', 'Capacity');

    // create input for avg speed
    this.truckAverageSpeedLabel = this._createLabel(this.truckForm.averageSpeed, 'Average Speed');
    this.truckAverageSpeed = this._createInput(this.truckForm.averageSpeed, 'text', 'Average Speed');

    // create fuel selector
    this.typeOfGasLabel = this._createLabel(this.truckForm.typeOfGas, 'Select Type Of Gas');
    this.typeOfGasSelecotr = this._createSelect(this.truckForm.typeOfGas);
    this.typeOfGasSelectorOptions = this._createOptions(['Gas', 'Diesel']);
    this.typeOfGasSelecotr.append(...this.typeOfGasSelectorOptions);

    // create save button
    this.truckSubmitButton = this._createElement('button');
    this.truckSubmitButton.id = 'savetruck';
    this.truckSubmitButton.textContent = 'Save';

    this.truckFrm.append(this.truckIdLabel, this.truckIdInput, this.truckModelLabel, this.truckModelSelector, this.licensePlateLabel, this.licensePlate, this.truckProducedYearLabel, this.truckProducedYear, this.truckCapacityLabel, this.truckCapacity, this.truckAverageSpeedLabel, this.truckAverageSpeed, this.typeOfGasLabel, this.typeOfGasSelecotr, this.truckSubmitButton);
    this.app.append(this.truckFrm);

    // The title of the app
    this.costTitle = this._createElement('h3');
    this.costTitle.textContent = 'Cost';


    // The form, with a [type="text"] input, and a submit button
    this.costForm = this._createElement('form');
    this.costForm.id = 'costform';
    this.costForm.append(this.costTitle);

    // create model selector
    this.allModelLabel = this._createLabel('transportmodel', 'Select Model');
    this.allModelSelector = this._createSelect('transportmodel');
    this.allModelSelectorOptions = this._createOptions(['small', 'middle', 'big', 'xl', 'MAN', 'Ford', 'Volvo', 'Mercedes']);
    this.allModelSelector.append(...this.allModelSelectorOptions);

    // create input for cost per kg
    this.costByKgLabel = this._createLabel('costbykg', 'Cost (by 1 kg of cargo)');
    this.costByKg = this._createInput('costbykg', 'text', 'Cost (by 1 kg of cargo)');

    // create input for cost per km
    this.costByKmLabel = this._createLabel('costbykm', 'Cost (by 1 km of distance)');
    this.costByKm = this._createInput('costbykm', 'text', 'Cost (by 1 km of distance)');

    // create save button
    this.costSubmitButton = this._createElement('button');
    this.costSubmitButton.id = 'savecost';
    this.costSubmitButton.textContent = 'Save';


    this.costForm.append(this.allModelLabel, this.allModelSelector, this.costByKgLabel, this.costByKg, this.costByKmLabel, this.costByKm, this.costSubmitButton);
    this.app.append(this.costForm);

  }

  // Create an element with an optional CSS class
  _createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  // Retrieve an element from the DOM
  _getElement(selector) {
    return document.querySelector(selector);
  }

  _createLabel(target, text) {
    const element = this._createElement('label');
    element.htmlFor = target;
    element.textContent = text;
    return element;
  }

  _createInput(id, type, placeHolder) {
    const element = this._createElement('input');
    element.id = id;
    element.type = type;
    element.placeholder = placeHolder;
    return element;
  }

  _createSelect(id) {
    const element = this._createElement('select');
    element.id = id;
    return element;
  }

  _createOptions(array) {
    const newArray = [' '];
    array = newArray.concat(array);
    const mapped = array.map((element) => {
      const option = this._createElement('option');
      option.value = element;
      option.textContent = element;
      return option;
    });
    return mapped;
  }

  bindAddShip(handler) {
    this.sForm.addEventListener('submit', (event) => {
      event.preventDefault();
      saveShip();
    });
  }

  bindAddTruck(handler) {
    this.truckFrm.addEventListener('submit', (event) => {
      event.preventDefault();
      saveTruck();
    });
  }

  bindAddCost(handler) {
    this.costForm.addEventListener('submit', (event) => {
      event.preventDefault();
      saveCost();
    });
  }
}
