import React from 'react';
import './Vision.css';
import { FaStarOfLife } from 'react-icons/fa';

const Vision = () => {
  return (
    <div className='vision'>
      <div className='vision-container'>
        <div className='vision-header'>
          <h2>OUR VISION</h2>
          <div>
            <FaStarOfLife className='ico vision-icon' />
          </div>
        </div>
        <div className='vision-text'>
          We envision a future where 1 billion souls are actively living out the
          teachings of Christ. Imagine a world where compassion, forgiveness,
          and love become the cornerstones of everyday actions, building
          stronger communities and individuals empowered by their faith.
        </div>
      </div>
    </div>
  );
};

export default Vision;
