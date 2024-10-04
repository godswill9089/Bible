import React, { useState } from 'react';
import './ReadyToJoin.css';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import { useDispatch } from 'react-redux';
import { setShowSignInFormDropdown } from '../../Features/sign-in/sign-in_slice';

const ReadyToJoin = () => {
  const dispatch = useDispatch();
  return (
    <div className='ready-to-join'>
      <div className='container'>
        <div className='content'>
          <div className='ready'>
            <h1 className='title'>Ready to join us in making a difference? </h1>
            <p className='info'>Choose Your Path</p>
            <div className='btn'>
              <ButtonPill
                onClick={() => {
                  dispatch(setShowSignInFormDropdown(true));
                  window.scrollTo(0, 0);
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
