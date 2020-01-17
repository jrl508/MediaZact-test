import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
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
