import React from 'react';
import { appendRow, clickHandler } from './Utils';

function Javascript() {
  return (
    <div>
      <h1>Javascript section</h1>
      <h4>
        Create a function that will append a new row to a table with the same
        amount of cells as the last row
      </h4>
      <table id='tbl'>
        <tbody>
          <tr>
            <td>row1</td>
            <td>row1</td>
          </tr>
          <tr>
            <td>row2</td>
            <td>row2</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => appendRow()}>Add Row</button>

      <h4>
        Create a clickHandler function that will make a button disappear and
        reappear after 1 second passes
      </h4>
      <button id='btn' onClick={() => clickHandler()}>
        Now You See Me
      </button>
    </div>
  );
}

export default Javascript;
