import React, { useEffect, useState } from 'react';
import './Become.css';
import { FaArrowRight, FaCheck, FaEdit } from 'react-icons/fa';
import { useIcons } from '../../hooks/useIcon';
import VideoPlayer from '../../Views/Molecules/VideoPlayer/VideoPlayer';

const Become = () => {
  return (
    <div className='become-component'>
      <div className='container'>
        <div className='content'>
          <div className='banner ban'>
            <div className='banner-con'>
              <div className='text-content'>
                <h1>Become A Volunteer</h1>
                <p>
                  Join A Vibrant Community Dedicating Their Time To Various
                  Initiatives, Like Community Outreach Programs Or Spreading The
                  Gospel Online.
                </p>
                <a href='#' className='watch-button'>
                  Watch Now
                  <div>
                    <FaArrowRight className='link' />
                  </div>
                </a>
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
