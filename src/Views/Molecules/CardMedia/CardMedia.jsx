import React from 'react';
import './CardMedia.css';
import { FaArrowRight } from 'react-icons/fa';
import ButtonPill from '../ButtonPill/ButtonPill';

const CardMedia = ({ title, info, img, onClick }) => {
  return (
    <div className='card-media'>
      <div className='card-top'></div>
      <div className='card-content'>
        <div className='icon'>
          <img src={img} alt='e-book' className='' />
        </div>
        <div className='details'>
          <h1>{title}</h1>
          <p>{info}</p>
        </div>
        <div className='btn-learn-more'>
          <ButtonPill onClick={onClick} text={'Learn more'} />
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
