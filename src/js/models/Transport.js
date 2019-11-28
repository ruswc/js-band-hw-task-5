import { clearFormField } from '../../helpers/common.helper';

export class Transport {

  static _randVal(min, max) {
    const rand1 = min + Math.random() * (max + 1 - min);
    const rand2 = min + Math.random() * (max + 1 - min);
    return 'jsbanddelivery' + Math.floor(rand1) + Math.floor(rand2);
  }

  constructor(options, unique = Transport._randVal(0, 200000)) {
    this.unique = unique;
    this.id = options.id;
    this.model = options.model;
    this.producedYear = options.producedYear;
    this.capacity = options.capacity;
    this.averageSpeed = options.averageSpeed;
    Transport._count += 1;
    Transport._name = 'jsbandtransport';
  }

  get getObj() {
    return JSON.stringify(this);
  }

  saveInLocalStorage() {

    var stor = Object.values(localStorage);
    var result = stor.find((x) => (x.indexOf(this.id) !== -1));
    if (result) {
      console.warn('This object already exist');
    } else {
      localStorage.setItem(Transport._name + Transport._count, JSON.stringify(this));
    }

  }

  showCapacityInPounds() {
    return (this.capacity * 2.20462262) + 'lb';
  }

  showAverageSpeed() {
    return this.averageSpeed;
  }

  varName() {
    return this;
  }
}

// static property
Transport._count = 0;

var keys = Object.keys(localStorage);
var allTransportIndexes = keys.filter((val) => val.indexOf('jsbandtransport') !== -1);
var indexes = allTransportIndexes.map((x) => +(x.replace('jsbandtransport', '')));
var maxIndex = Math.max(...indexes);

if (indexes.length > 0) {
  Transport._count = maxIndex + 1;
}
