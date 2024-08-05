import React from 'react';
import './ButtonPill.css';
import { useIcons } from '../../../hooks/useIcon';

const ButtonPill = ({ text, onClick, podcast, light }) => {
  const { arrowRight, arrowRightLight, audio } = useIcons();
  return (
    <div className='btn-pill-component-wrapper'>
      <div
        onClick={onClick}
        className={`btn-pill-component ${light && 'btn-pill-component-light'}`}
      >
        <p>{text}</p>
        <img
          src={podcast ? audio : light ? arrowRightLight : arrowRight}
          alt=''
        />
      </div>
    </div>
  );
};

export default ButtonPill;
