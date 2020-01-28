import React from 'react';
import { appendRow, clickHandler } from './Utils';

function Javascript() {
  return (
    <>
      <h1 className='page-header'>Javascript section</h1>
      <div className='js-section'>
        <div className='card'>
          <h4>
            Create a function that will append a new row to a table with the
            same amount of cells as the last row
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
        </div>
        <div className='card'>
          <h4>
            Create a clickHandler function that will make a button disappear and
            reappear after 1 second passes
          </h4>
          <button id='btn' onClick={() => clickHandler()}>
            Now You See Me
          </button>
        </div>
        <div className='card'>
          <h4>
            Create a function that will filter out any non numbers and return
            the original array modified
          </h4>

          <code>
            let filterNums = (arr) => &#123; <br></br> arr.forEach(element =>
            &#123; <br></br>
            let index = arr.indexOf(element);<br></br> if (typeof arr[index] !=
            'number') &#123;<br></br> arr.splice(index, 1);<br></br> &#125;
            <br></br> &#125;);
            <br></br>
            return arr;<br></br>&#125;
          </code>
        </div>
      </div>
    </>
  );
}

export default Javascript;
