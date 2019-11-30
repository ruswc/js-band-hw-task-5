export var clearFormField = function clearFormField(elements) {
  for (let i = 0, { length } = elements; i < length; i += 1) {
    if (elements[i].type === 'text' || elements[i].type === 'select-one') {
      elements[i].value = '';
    }
  }
};

// render list
export function renderList() {
  const keys = Object.keys(localStorage);
  const allTransportIndexes = keys.filter((val) => val.indexOf('jsbandtransport') !== -1);
  const container = document.getElementById('listoftransport');

  // clean container
  container.innerHTML = '';

  for (let i = 0, { length } = allTransportIndexes; i < length; i += 1) {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    const obj = JSON.parse(localStorage.getItem(allTransportIndexes[i]));
    for (const key in obj) {
      if (key !== 'unique') {
        plate.innerHTML += `<p><strong>${key}:</strong> ${obj[key]}</p>`;
      }
    }
    container.append(plate);
  }
}
