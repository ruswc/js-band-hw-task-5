export class LocalStorage {
  constructor() {
    this.storage = localStorage;
    this.jsband = this._listLocalStorage();
  }

  _listLocalStorage() {
    if (this.storage) {
      const keys = Object.keys(this.storage);
      const allIndexes = keys.filter((val) => val.indexOf('jsband') !== -1);
      const storage = [];
      for (let i = 0, { length } = allIndexes; i < length; i += 1) {
        JSON.parse(localStorage.getItem('todos'));
        const obj = JSON.parse(this.storage.getItem(allIndexes[i]));
        storage.push(obj);
      }
      return storage;
    }

    return undefined;

  }

  saveInStorage(key, value) {
    // this.storage.setItem('transports', JSON.stringify(todos))
    this.storage.setItem(key, value);
  }

  bindSaveToStorage(key, value) {
    this.storage.setItem(key, value);
  }
}
