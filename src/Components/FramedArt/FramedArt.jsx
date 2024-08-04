import React, { useState } from 'react';
import './FramedArt.css';

import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import SectionTitle from '../../Views/Atoms/SectionTitle/SectionTitle';
import Info from '../../Views/Atoms/Info/Info';

const FramedArt = () => {
  const [direction, setDirection] = useState('left');
  const [active, setActive] = useState(1);
  return (
    <div className='framed-art'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Framed Art'} />
          </div>
          <div className='details'>
            <SectionTitle text='Uplifting Inspiration' />
            <Info
              text=' Display your faith in your home or office with beautiful framed
              artwork featuring scripture verses, inspirational quotes, and
              faith-based imagery.'
            />
          </div>
          <div className='btns-wrapper'>
            <ButtonPill
              onClick={() => {
                console.log('btn pill');
              }}
              text={'Shop now'}
            />
            <div className='btns'>
              <ButtonRound
                active={direction === 'left'}
                onClick={() => setDirection('left')}
                direction='left'
              />
              <ButtonRound
                active={direction === 'right'}
                onClick={() => setDirection('right')}
                direction='right'
              />
            </div>
          </div>
          <div className='btns-2'>
            <div
              className={`btn ${active === 1 && 'active'}`}
              onClick={() => setActive(1)}
            ></div>
            <div
              className={`btn ${active === 2 && 'active'}`}
              onClick={() => setActive(2)}
            ></div>
            <div
              className={`btn ${active === 3 && 'active'}`}
              onClick={() => setActive(3)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramedArt;
