import React, { useState } from 'react';
import db from '../data/zipcode-database.json';
import { calculateDistance } from '../components/Utils';

function ZcodeForm() {
  const [zip1, setZip1] = useState('');
  const [zip2, setZip2] = useState('');
  const [distance, setDistance] = useState(0);

  function clicked() {
    let point1 = db.filter(place => place.Zipcode === zip1);
    let point2 = db.filter(place => place.Zipcode === zip2);
    if (point1[0] && point2[0]) {
      setDistance(calculateDistance(point1[0], point2[0]));
      console.log(
        `First point: ${point1[0].City}, Second point: ${point2[0].City}`
      );
      console.log(
        `Distance in Miles: ${calculateDistance(point1[0], point2[0])}`
      );
    } else {
      console.log('please enter valid zip codes');
    }
  }

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
        }}>
        <h3>Distance Finder</h3>
        <input
          type='text'
          placeholder='Insert valid zipcode'
          margin='normal'
          value={zip1}
          onChange={event => setZip1(event.target.value)}
        />
        <input
          type='text'
          placeholder='Insert valid zipcode'
          margin='normal'
          value={zip2}
          onChange={event => setZip2(event.target.value)}
        />
      </form>
      <button onClick={() => clicked()}>Calculate</button>
      <p>Distance in Miles: {distance}</p>
    </>
  );
}

export default ZcodeForm;
