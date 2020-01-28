import React, { useState } from 'react';

function Form({ saveString }) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveString(value);
      }}>
      <input
        className='text-field'
        type='text'
        placeholder='Insert string to be reversed'
        value={value}
        margin='normal'
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
}

export default Form;
