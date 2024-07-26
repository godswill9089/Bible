import React, { useState } from 'react';
import './About.css';
import { FaStarOfLife } from 'react-icons/fa';
import CardContainer from '../CardContainer/CardContainer';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import Title from '../../Views/Atoms/Title/Title';

const About = () => {
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('');
  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (translateSize === 0) {
        setTranslateSize(210);
      } else {
        setTranslateSize(translateSize - 42);
      }
    } else {
      if (translateSize === 210) {
        setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + 42);
      }
    }
    setDirection(direction);
  };
  return (
    <div className='about-component'>
      <div className='title-wrapper'>
        <Title text={'Learn About who we Are'} />
      </div>
      <div className='about'>
        <div className='details'>
          <p>
            Welcome to The Moving Bible! We are a passionate community dedicated
            to bringing the Gospel of Jesus Christ to life. We believe that
            faith should not just be words, but a driving force for positive
            change in the world.
          </p>
          <p>
            Our vision is ambitious: to inspire and equip 1 billion souls to
            live Christ-like lives in the next ten years. Imagine a world where
            the teachings of the Bible are reflected in everyday actions,
            transforming communities and individuals.
          </p>
        </div>
        <div className='btn-about-wrapper'>
          <div className='btn-about'>
            <ButtonRound
              active={direction === 'left'}
              onClick={() => handleTranslate('left')}
              direction='left'
            />
            <ButtonRound
              active={direction === 'right'}
              onClick={() => handleTranslate('right')}
              direction='right'
            />
          </div>
        </div>
      </div>
      <CardContainer translateSize={translateSize} />
    </div>
  );
};

export default About;
