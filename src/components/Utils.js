export const appendRow = () => {
  // create table reference to target desired ID
  let tblRef = document.getElementById('tbl').tBodies[0];
  // target last row to retrieve number of cells
  let lastRow = tblRef.rows[tblRef.rows.length - 1];
  let cellCount = lastRow.cells.length;
  // create HTML elements
  let newRow = document.createElement('tr');
  let newCell = document.createElement('td');
  let cellText = document.createTextNode('new');
  newCell.appendChild(cellText);
  // loop through to populate new row element
  for (let i = 0; i < cellCount; i++) {
    newRow.appendChild(newCell.cloneNode(true));
  }
  // append new row element to the end of the table reference
  tblRef.appendChild(newRow);
};

export const clickHandler = () => {
  document.getElementById('btn').style.visibility = 'hidden';
  setTimeout(function() {
    document.getElementById('btn').style.visibility = 'visible';
  }, 1000);
};

export const filterNums = arr => {
  arr.forEach(element => {
    let index = arr.indexOf(element);
    if (typeof arr[index] != 'number') {
      arr.splice(index, 1);
    }
  });
  return arr;
};

export function toRads(deg) {
  let pi = Math.PI;
  return deg * (pi / 180);
}

export function calculateDistance(point1, point2) {
  let [lat1, lon1, lat2, lon2] = [
    parseFloat(point1.Lat),
    parseFloat(point1.Long),
    parseFloat(point2.Lat),
    parseFloat(point2.Long)
  ];
  var R = 6371000; // metres
  var φ1 = toRads(lat1);
  var φ2 = toRads(lat2);
  var Δφ = toRads(lat2 - lat1);
  var Δλ = toRads(lon2 - lon1);

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = (R * c) / 1609;

  return d;
}
