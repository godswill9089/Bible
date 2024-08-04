import React, { useEffect, useState } from 'react';
import './Video.css';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import { useIcons } from '../../hooks/useIcon';
import VideoPlayer from '../../Views/Molecules/VideoPlayer/VideoPlayer';
import Info from '../../Views/Atoms/Info/Info';
import SectionTitle from '../../Views/Atoms/SectionTitle/SectionTitle';

const Video = () => {
  const [direction, setDirection] = useState('left');
  const [active, setActive] = useState(1);
  const { play, expand } = useIcons();
  const items = [
    {
      id: 1,
      title: 'Short Inspirational Clips:',
      info: 'Uplifting and thought-provoking short videos on various topics related to faith, social justice, and living a Christ-like life. Perfect for social media sharing and quick bursts of inspiration.',
    },
    {
      id: 2,
      title: 'Documentaries',
      info: 'Compelling documentaries showcasing the impact of The Moving Bible movement around the world. Witness firsthand how faith translates into action and empowers positive change.',
    },
    {
      id: 3,
      title: 'How-To" Videos',
      info: 'Practical tutorials on various topics like Bible study methods, prayer techniques, or incorporating faith into daily routines. These videos equip viewers with tools to deepen their spiritual growth',
    },
  ];
  const [activeItem, setActiveItem] = useState({});
  const handleActive = (direction) => {
    setDirection(direction);
    if (direction === 'left') {
      if (active === 1) {
        setActive(3);
      } else {
        setActive(active - 1);
      }
    } else {
      if (active === 3) {
        setActive(1);
      } else {
        setActive(active + 1);
      }
    }
  };
  useEffect(() => {
    setActiveItem(items[active - 1]);
  }, [active]);
  return (
    <div className='video-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Video'} />
          </div>
          <div className='details-wrapper'>
            <div className='details'>
              <SectionTitle text={activeItem.title} />
              <div className='info-con'>
                <Info text={activeItem.info} />
              </div>
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
                    onClick={() => handleActive('left')}
                    direction='left'
                  />
                  <ButtonRound
                    active={direction === 'right'}
                    onClick={() => handleActive('right')}
                    direction='right'
                  />
                </div>
              </div>
            </div>
            <div className='video-wrapper'>
              <VideoPlayer />
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
