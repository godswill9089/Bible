import React from 'react';
import './ButtonPill.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ButtonPill = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className='btn-pill-component'>
      <p>{text}</p> <FaArrowRight />
    </div>
  );
};

export default ButtonPill;
