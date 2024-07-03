import React from 'react';
import './Coverbg.css';
import people from '../../../Assets/Mask group2.png';

const coverbg = () => {
  return (
    <section className='hero-section'>
      <img src={people} alt='Hero' className='hero-image' />
      <div className='overlay'>
        <p className='overlay-text'>
          The moving bible is more than just an organization. We are a global
          movement, a diverse tapestry woven from individuals from all walks of
          life, united by a shared passion for Christ and a desire to make a
          difference.
        </p>
      </div>
    </section>
  );
};

export default coverbg;
