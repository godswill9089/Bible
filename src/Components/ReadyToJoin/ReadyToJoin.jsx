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
            <p className='info'>Choose your path</p>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  console.log('btn pill');
                }}
                text={'Join the movement'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoin;
