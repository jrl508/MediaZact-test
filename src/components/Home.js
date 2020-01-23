import React, { useState } from 'react';
import Form from './Form';
function Home() {
  const [list, setList] = useState([]);

  return (
    <>
      <h1>Main React Section </h1>
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
      <div>
        Word list:
        <ul>
          {list.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
