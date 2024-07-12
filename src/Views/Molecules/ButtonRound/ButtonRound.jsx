import React from 'react';
import './ButtonRound.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ButtonRound = ({ onClick, active, direction }) => {
  return (
    <div onClick={onClick} className={`btn-round ${active && 'active'}`}>
      {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </div>
  );
};

export default ButtonRound;
