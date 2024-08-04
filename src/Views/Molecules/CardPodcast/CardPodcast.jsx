import React from 'react';
import './CardPodcast.css';
import ButtonPill from '../ButtonPill/ButtonPill';

const CardPodcast = ({ item }) => {
  return (
    <div className='podcast-component'>
      <div className='podcast'>
        <div className='podcast-content'>
          <div className='img-wrapper'>
            <img className='img-1' src={item.img1} alt='' />
            <img className='img-2' src={item.img2} alt='' />
          </div>
          <div className='details'>
            <h3>{item.title}</h3>
            <p className='podcast-info'>{item.info}</p>
            <p className='podcast-text'>{item.text}</p>
          </div>
          <div className='btn-con'>
            <ButtonPill text={'Listen now'} podcast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPodcast;
