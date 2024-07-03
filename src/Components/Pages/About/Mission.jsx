import React from 'react';
import './Mission.css';
import '../../Card/Card.css';
import { FaArrowRight } from 'react-icons/fa';

const Mission = ({ missions }) => {
  return (
    <div className='About-container'>
      <div className='About-header-text abt-t'>
        <h2>Our MISSION</h2>
        {/* <div>
          <FaStarOfLife className='ico' />
        </div> */}
      </div>
      <div className='about-p '>
        <div className='p'>
          <p>The Moving Bible is dedicated to:</p>
        </div>
      </div>
      <div className='flex'>
        {missions.map((mission) => (
          <div className='card'>
            <div className='card-top-bar'></div>
            <div className='card-top'>
              <h2 className='card-title'>{mission.title}</h2>
              <p className='card-description'>{mission.description}</p>
              <a href='#' className='card-link'>
                Learn More{' '}
                <span className='arrow'>
                  {' '}
                  <FaArrowRight />{' '}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
