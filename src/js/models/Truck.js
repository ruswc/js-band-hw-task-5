import { Transport } from './Transport';
import { clearFormField, renderList } from '../../helpers/common.helper';


class Truck extends Transport {
  constructor(options) {
    super(options);
    this.licensePlate = options.licensePlate;
    this.typeOfGas = options.typeOfGas;
  }

  showAverageSpeed() {
    return super.showAverageSpeed() + 'km';
  }
}

const DEFAULT_TRUCK = new Truck({
  id: '321-542-860',
  model: 'KFO 354',
  licensePlate: 'AA 6324 II',
  producedYear: '2018',
  capacity: '50000',
  averageSpeed: '130',
  typeOfGas: 'gasoline'
});
DEFAULT_TRUCK.saveInLocalStorage();

renderList();

// new truck creation
export var saveTruck = function saveTruck() {

  const jsbanddelivery = new Truck({
    id: truckid.value,
    model: truckmodel.value,
    licensePlate: licenseplate.value,
    producedYear: truckproducedyear.value,
    capacity: truckcapacity.value,
    averageSpeed: truckavgspeed.value,
    typeOfGas: typeofgas.value
  });

  console.log(`%c Average Speed of ${jsbanddelivery.model}`, 'color:purple;font-weight:bold;font-size:15px');
  console.log(`%c ${jsbanddelivery.showAverageSpeed()}`, 'color:purple;font-weight:bold;font-size:12px');
  console.log(`%c Capacity in Pounds of ${jsbanddelivery.model}`, 'color:purple;font-weight:bold;font-size:15px');
  console.log(`%c ${jsbanddelivery.showCapacityInPounds()}`, 'color:purple;font-weight:bold;font-size:12px');

  jsbanddelivery.saveInLocalStorage();

  var { elements } = document.getElementById('truckform');
  clearFormField(elements);

  renderList();
};
