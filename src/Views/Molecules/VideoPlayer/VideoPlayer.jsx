import React from 'react';
import { useIcons } from '../../../hooks/useIcon';
import './VideoPlayer.css';

const VideoPlayer = ({ onClick }) => {
  const { play, expand } = useIcons();
  return (
    <div className='video-player-component'>
      <div className='video-con'>
        <div className='backdrop'></div>
        <div className='video-player-wrapper' onClick={onClick}>
          <div className='screen-wrapper'>
            <div className='screen'>
              <img src={play} alt='' className='play' />
              <img src={expand} alt='' className='expand' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
