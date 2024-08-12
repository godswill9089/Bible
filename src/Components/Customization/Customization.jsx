import React from 'react';
import './Customization.css';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import { FaArrowDown } from 'react-icons/fa';
import Info from '../../Views/Atoms/Info/Info';
import SectionTitle from '../../Views/Atoms/SectionTitle/SectionTitle';

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
              <SectionTitle text='Design generator' />
              <Info
                textTitle='Express Your Faith Uniquely:'
                text='Unleash your
                creativity and design your own faith-inspired artwork using our
                online customization tool. Choose from various backgrounds,
                scripture verses, and design elements to create a one-of-a-kind
                piece.'
              />
            </div>
            <div className='describe'>
              <div className='describe-info'>
                <p className='placeholder'>Describe what you want to see</p>
                <div className='style'>
                  <p>Style</p>
                  <FaArrowDown />
                </div>
              </div>
              <div className='btn-pill'>
                <ButtonPill onClick={() => {}} text={'Generate'} />
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
