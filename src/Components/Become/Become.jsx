import React from 'react';
import './Become.css';
import { FaArrowRight } from 'react-icons/fa';
import VideoPlayer from '../../Views/Molecules/VideoPlayer/VideoPlayer';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import Info from '../../Views/Atoms/Info/Info';
import SectionTitle from '../../Views/Atoms/SectionTitle/SectionTitle';

const Become = () => {
  return (
    <div className='become-component'>
      <div className='container'>
        <div className='content'>
          <div className='banner'>
            <div className='banner-con'>
              <div className='text-content'>
                <SectionTitle text='Become a volunteer' />
                <Info
                  text='Join A Vibrant Community Dedicating Their Time To Various
                  Initiatives, Like Community Outreach Programs Or Spreading The
                  Gospel Online.'
                />
                <div className='btn'>
                  <ButtonPill
                    onClick={() => {
                      console.log('btn pill');
                    }}
                    text={'Watch now'}
                  />
                </div>
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
