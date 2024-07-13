import React from 'react';
import './Customization.css';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import { FaArrowDown } from 'react-icons/fa';

const Customization = () => {
  return (
    <div className='customization'>
      <div className='container'>
        <div className='content'>
          <div className='details-wrapper'>
            <div className='title-wrapper'>
              <Title text={'Customization'} />
            </div>
            <div className='details'>
              <h2 className='title'>Design generator</h2>
              <p className='info'>
                <span>Express Your Faith Uniquely:</span> Unleash your
                creativity and design your own faith-inspired artwork using our
                online customization tool. Choose from various backgrounds,
                scripture verses, and design elements to create a one-of-a-kind
                piece.
              </p>
            </div>
            <div className='describe'>
              <div className='describe-info'>
                <p>Describe what you want to see</p>
                <div className='style'>
                  <p>Style</p>
                  <FaArrowDown />
                </div>
              </div>
              <div className='btn-pill'>
                <ButtonPill
                  onClick={() => {
                    console.log('btn pill');
                  }}
                  text={'Generate'}
                />
              </div>
            </div>
          </div>
          <div className='card-wrapper'>
            <div className='card-customization'></div>
          </div>
        </div>
        <div className='created'>
          <h1 className='title'>Created with the Perfect Keepsake</h1>
          <div className='created-cards'>
            <div className='column column-1'>
              <div className='card-customization-2'></div>
              <div className='card-customization-1'></div>
            </div>
            <div className='column column-2'>
              <div className='card-customization-1'></div>
              <div className='card-customization-1'></div>
            </div>
            <div className='column column-3'>
              <div className='card-customization-1'></div>
              <div className='card-customization-2'></div>
            </div>
            <div className='column column-4'>
              <div className='card-customization-1'></div>
              <div className='card-customization-1'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
