import React, { useState } from 'react';
import './ReadyToJoin.css';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const ReadyToJoin = () => {
  return (
    <div className='ready-to-join'>
      <div className='container'>
        <div className='content'>
          <div className='ready'>
            <h1 className='title'>Ready to join us in making a difference? </h1>
            <p className='info'>Choose Your Path</p>
            <div className='btn'>
              <ButtonPill onClick={() => {}} text={'Join the movement'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoin;
