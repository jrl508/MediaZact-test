import React from 'react';
import { appendRow } from './Utils';

function Javascript() {
  return (
    <div>
      <h1>Javascript section</h1>
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
    </div>
  );
}

export default Javascript;
