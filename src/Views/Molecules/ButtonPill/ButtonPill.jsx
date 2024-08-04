import React from 'react';
import './ButtonPill.css';
import { useIcons } from '../../../hooks/useIcon';

const ButtonPill = ({ text, onClick, podcast }) => {
  const { arrowRight, audio } = useIcons();
  return (
    <div className='btn-pill-component-wrapper'>
      <div onClick={onClick} className='btn-pill-component'>
        <p>{text}</p>
        <img src={podcast ? audio : arrowRight} alt='' />
      </div>
    </div>
  );
};

export default ButtonPill;
