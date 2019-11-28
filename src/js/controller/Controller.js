export class Controller {
  constructor(model, view, localStorage) {
    this.model = model;
    this.view = view;
    this.localStorage = localStorage;

    this.view.bindAddShip();
    this.view.bindAddTruck();
    this.view.bindAddCost();
    // this.localStorage.bindSaveToStorage()
  }
}
