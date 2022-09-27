let table = document.getElementById("sampleTable");

// function insert_Row() {

//     let trEl = document.createElement('tr');
//     let tdElFirst = document.createElement('td');
//     let tdElSecond = document.createElement('td');
//     tdElFirst.textContent = 'Row3 cell1';
//     tdElSecond.textContent = 'Row3 cell2';

//     trEl.appendChild(tdElFirst);
//     trEl.appendChild(tdElSecond);
//     table.appendChild(trEl);
// }

function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.textContent = "New Cell1";
  z.textContent = "New Cell2";
}
