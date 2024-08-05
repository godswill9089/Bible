import React from 'react';
import './Vision.css';
import Title from '../../../Views/Atoms/Title/Title';
import Info from '../../../Views/Atoms/Info/Info';

const Vision = () => {
  return (
    <div className='vision'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Our vision'} />
          </div>
          <div className='vision-text'>
            <Info
              text={
                'We envision a future where 1 billion souls are actively living out the teachings of Christ. Imagine a world where compassion, forgiveness, and love become the cornerstones of everyday actions, building stronger communities and individuals empowered by their faith.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
