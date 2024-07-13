import React, { useState } from 'react';
import './Audio.css';
import { FaArrowLeft, FaStarOfLife } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import CardContainer from '../CardContainer/CardContainer';
import { useIcons } from '../../hooks/useIcon';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';

const Audio = () => {
  const { podcast1, podcast1Sm, podcast2, podcast2Sm, podcast3, podcast3Sm } =
    useIcons();
  const podcasts = [
    {
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast1,
      img2: podcast1Sm,
    },
    {
      title: 'Bible Study',
      info: 'Living like Christ',
      text: 'The Sermon on the Mount in Action (Focuses on a specific scripture passage and its practical application)',
      img1: podcast2,
      img2: podcast2Sm,
    },
    {
      title: 'Podcast',
      info: 'Bible on the move',
      text: 'Decoding Scripture for Everyday Life (Combines practicality with scripture study)',
      img1: podcast3,
      img2: podcast3Sm,
    },
    {
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast1,
      img2: podcast1Sm,
    },
    {
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast2,
      img2: podcast2Sm,
    },
  ];
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('right');
  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (translateSize === 0) {
        setTranslateSize(210);
      } else {
        setTranslateSize(translateSize - 27);
      }
      setDirection('left');
    } else {
      if (translateSize === 210) {
        setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + 27);
      }
      setDirection('right');
    }
    setDirection(direction);
  };
  return (
    <div className='audio-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Audio'} />
          </div>
          <div className='info'>
            <p>
              <span> Podcast: "Faith in Action": </span>Explore inspiring
              stories of individuals who translate their faith into impactful
              service. Hear interviews with pastors, missionaries, and everyday
              heroes making a difference in their communities.
            </p>
            <p>
              <span>Bible Studies:</span> Join in-depth discussions on scripture
              with engaging hosts and guest speakers. Delve deeper into the
              Bible's message and gain practical insights for daily living.
            </p>
          </div>
          <div className='carousel'>
            <div className='podcasts-wrapper'>
              <div
                className='podcasts'
                style={{ transform: `translateX(-${translateSize}rem)` }}
              >
                {podcasts.map((podcast, index) => (
                  <div key={index} className='podcast'>
                    <div className='podcast-content'>
                      <div className='img-wrapper'>
                        <img className='img-1' src={podcast.img1} alt='' />
                        <img className='img-2' src={podcast.img2} alt='' />
                      </div>
                      <div className='details'>
                        <h3>{podcast.title}</h3>
                        <p className='podcast-info'>{podcast.info}</p>
                        <p className='podcast-text'>{podcast.text}</p>
                      </div>
                      <div className='btn-con'>
                        <ButtonPill text={'Listen now'} podcast />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='carousel-btn-left'>
                <ButtonRound
                  active={direction === 'left'}
                  direction='left'
                  onClick={() => handleTranslate('left')}
                />
              </div>
              <div className='carousel-btn-right'>
                <ButtonRound
                  active={direction === 'right'}
                  direction='right'
                  onClick={() => handleTranslate('right')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
