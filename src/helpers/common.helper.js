export var clearFormField = function clearFormField(elements) {
  for (var i = 0, { length } = elements; i < length; i++) {
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

  for (var i = 0, { length } = allTransportIndexes; i < length; i++) {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    var obj = JSON.parse(localStorage.getItem(allTransportIndexes[i]));
    for (var key in obj) {
      if (key !== 'unique') {
        plate.innerHTML += `<p><strong>${key}:</strong> ${obj[key]}</p>`;
      }
    }
    container.append(plate);
  }

}
