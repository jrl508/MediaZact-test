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
