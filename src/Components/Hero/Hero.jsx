import React from 'react';
import './Hero.css';
import hero from '../../Assets/Frame 6.png';

const Hero = () => {
  return (
    <div className='hero-img'>
      <img src={hero} alt='hero' className='hero-logo' />
    </div>
  );
};

export default Hero;
