import React, { useState } from 'react';
import './Video.css';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import { useIcons } from '../../hooks/useIcon';

const Video = () => {
  const [direction, setDirection] = useState('left');
  const [active, setActive] = useState(1);
  const { play, expand } = useIcons();
  return (
    <div className='video-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Video'} />
          </div>
          <div className='details-wrapper'>
            <div className='details'>
              <h2 className='title'>Short Inspirational Clips:</h2>
              <p className='info'>
                Uplifting and thought-provoking short videos on various topics
                related to faith, social justice, and living a Christ-like life.
                Perfect for social media sharing and quick bursts of
                inspiration.
              </p>
                <div className='btns-wrapper'>
            <ButtonPill
              onClick={() => {
                console.log('btn pill');
              }}
              text={'Watch now'}
            />
            <div className='btns'>
              <ButtonRound
                active={direction === 'left'}
                onClick={() => setDirection('left')}
                direction='left'
              />
              <ButtonRound
                active={direction === 'right'}
                onClick={() => setDirection('right')}
                direction='right'
              />
            </div>
          </div>
            </div>
            <div className='video-wrapper'>
              <div className='video-con'>
                <div className='backdrop'></div>
                <div className='video-player-wrapper'>
                  <div className='screen-wrapper'>
                    <div className='screen'>
                      <img src={play} alt='' className='play' />
                      <img src={expand} alt='' className='expand' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className='btns-2'>
            <div
              className={`btn ${active === 1 && 'active'}`}
              onClick={() => setActive(1)}
            ></div>
            <div
              className={`btn ${active === 2 && 'active'}`}
              onClick={() => setActive(2)}
            ></div>
            <div
              className={`btn ${active === 3 && 'active'}`}
              onClick={() => setActive(3)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
