import React, { useState } from 'react';
import Form from './Form';
import ZcodeForm from './ZcodeForm';

function Home() {
  const [list, setList] = useState([]);

  return (
    <div className='reactQpage'>
      <h1>Main React Section </h1>
      <div className='card'>
        <Form
          saveString={stringText => {
            const reversedText = stringText
              .split('')
              .reverse()
              .join('');
            if (reversedText.length > 0) {
              setList([...list, reversedText]);
            }
          }}
        />
        Word list:
        <ul>
          {list.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      </div>
      <div className='card'>
        <ZcodeForm />
      </div>
    </div>
  );
}

export default Home;
