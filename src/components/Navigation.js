import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div>
        <Link to='/'>React Questions</Link>
      </div>
      <div>
        <Link to='/CS'>CS Questions</Link>
      </div>
      <div>
        <Link to='/javascript'>Javascript Questions</Link>
      </div>
    </div>
  );
};

export default Navigation;
