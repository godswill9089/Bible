import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './Check.css';

const Check = ({ onClick, checked }) => {
  return (
    <div onClick={onClick} className='check-btn'>
      {checked && <FaCheck />}
    </div>
  );
};

export default Check;
