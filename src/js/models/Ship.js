import { clearFormField, renderList } from '../../helpers/common.helper';
import { Transport } from './Transport';


class Ship extends Transport {
  constructor(options) {
    super(options);
    this.snName = options.snName;
    this.countOfTeam = options.countOfTeam;
  }

  showAverageSpeed() {
    return super.showAverageSpeed() + 'nm';
  }
}

// new ship creation
export var saveShip = function saveShip() {

  const jsbanddelivery = new Ship({
    id: idofship.value,
    model: shipmodel.value,
    name: serialnumber.value,
    producedYear: shipproducedyear.value,
    capacity: shipcapacity.value,
    averageSpeed: shipavgspeed.value,
    countOfTeam: countofteam.value
  });

  console.log(`%c Average Speed of ${jsbanddelivery.model}`, 'color:skyblue;font-weight:bold;font-size:15px');
  console.log(`%c ${jsbanddelivery.showAverageSpeed()}`, 'color:skyblue;font-weight:bold;font-size:12px');
  console.log(`%c Capacity in Pounds of ${jsbanddelivery.model}`, 'color:skyblue;font-weight:bold;font-size:15px');
  console.log(`%c ${jsbanddelivery.showCapacityInPounds()}`, 'color:skyblue;font-weight:bold;font-size:12px');

  jsbanddelivery.saveInLocalStorage();

  var { elements } = document.getElementById('shipform');
  clearFormField(elements);

  renderList();
};

const DEFAULT_SHIP = new Ship({
  id: '456-452-412',
  model: 'Middle',
  name: 'Kyiv',
  producedYear: '2019',
  capacity: '400000',
  averageSpeed: '40',
  countOfTeam: '250'
});
DEFAULT_SHIP.saveInLocalStorage();
