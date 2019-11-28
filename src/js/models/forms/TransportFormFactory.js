import { ShipForm } from './ShipForm';
import { TruckForm } from './TruckForm';

export class TransportFormFactory {
  create(type) {
    if (type === 'ship') {
      return new ShipForm({
        formId: 'shipform',
        formHeader: 'Ship / Argosy',
        transportId: 'idofship',
        model: 'shipmodel',
        producedYear: 'shipproducedyear',
        capacity: 'shipcapacity',
        averageSpeed: 'shipavgspeed',
        countOfTeam: 'countofteam',
        serialNumberOrName: 'serialnumber'
      });
    }
    if (type === 'truck') {
      return new TruckForm({
        formId: 'truckform',
        formHeader: 'Truck',
        transportId: 'truckid',
        model: 'truckmodel',
        licensePlate: 'licenseplate',
        producedYear: 'truckproducedyear',
        capacity: 'truckcapacity',
        averageSpeed: 'truckavgspeed',
        typeOfGas: 'typeofgas'
      });
    }
    // if (type === 'cost') {
    //     return new CostForm({})
    // }
  }
}
