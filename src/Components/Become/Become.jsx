import React from 'react';
import './Become.css';
import { FaArrowRight } from 'react-icons/fa';
import VideoPlayer from '../../Views/Molecules/VideoPlayer/VideoPlayer';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const Become = () => {
  return (
    <div className='become-component'>
      <div className='container'>
        <div className='content'>
          <div className='banner'>
            <div className='banner-con'>
              <div className='text-content'>
                <h1>Become A Volunteer</h1>
                <p className='info'>
                  Join A Vibrant Community Dedicating Their Time To Various
                  Initiatives, Like Community Outreach Programs Or Spreading The
                  Gospel Online.
                </p>
                <ButtonPill
                  onClick={() => {
                    console.log('btn pill');
                  }}
                  text={'Watch now'}
                />
              </div>
              <div className='video-content-wrapper'>
                <div className='vid-contents'>
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
