import { clearFormField } from '../../helpers/common.helper';

class Cost {
  constructor(options) {
    this.transportModel = options.transportModel;
    this.costPerKg = options.costPerKg;
    this.costPerKm = options.costPerKm;

    Cost._count += 1;
    Cost._name = 'jsbandcost';
  }

  saveInLocalStorage() {
    localStorage.setItem(Cost._name + Cost._count, JSON.stringify(this));
  }
}

// static property
Cost._count = 0;

const keysCost = Object.keys(localStorage);
const allTransportIndexes = keysCost.filter((val) => val.indexOf('jsbandcost') !== -1);
const indexes = allTransportIndexes.map((x) => +(x.replace('jsbandcost', '')));
const maxIndex = Math.max(...indexes);

if (indexes.length > 0) {
  Cost._count = maxIndex + 1;
}

// render list
function renderList() {
  const keys = Object.keys(localStorage);
  const allTransportIndexes = keys.filter((val) => val.indexOf('jsbandcost') !== -1);
  const listContainer = document.getElementById('costlist');

  // clean container
  listContainer.innerHTML = '';

  for (let i = 0, { length } = allTransportIndexes; i < length; i++) {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    const obj = JSON.parse(localStorage.getItem(allTransportIndexes[i]));
    for (const key in obj) {
      if (key !== 'unique') {
        plate.innerHTML += `<p><strong>${key}:</strong> ${obj[key]}</p>`;
      }
    }

    listContainer.append(plate);
  }
}

renderList();

export var saveCost = function saveCost() {
  const cost = new Cost({
    transportModel: transportmodel.value,
    costPerKg: costbykg.value,
    costPerKm: costbykm.value
  });

  cost.saveInLocalStorage();

  const { elements } = document.getElementById('costform');
  clearFormField(elements);

  renderList();
};
