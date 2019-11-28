import { Controller } from './controller/Controller';
import { Model } from './models/Model';
import { ViewForm } from './view/ViewForm';
import { LocalStorage } from './models/LocalStorage';

const app = new Controller(new Model(), new ViewForm(), new LocalStorage());

console.log(app);
