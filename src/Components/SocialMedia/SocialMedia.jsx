import React, { useState } from 'react';
import './SocialMedia.css';

import { useIcons } from '../../hooks/useIcon';
import Title from '../../Views/Atoms/Title/Title';
import Links from '../../Views/Atoms/Links/Links';

const SocialMedia = () => {
  const {
    podcast1,
    podcast1Sm,
    podcast2,
    podcast2Sm,
    podcast3,
    podcast3Sm,
    socialMedia1,
    socialMedia2,
    socialMedia3,
    play,
    productsBannerIcon,
    productsBannerIcon2,
    starLike,
  } = useIcons();
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
    <div className='social-media-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Social Media'} />
          </div>
          <div className='cards-con'>
            <div className='cards-wrapper'>
              <div className='card-social-media'>
                <img src={socialMedia1} alt='media' className='card-img' />
                <img src={play} alt='' className='card-img-2' />
                <div className='links-wrapper'>
                  <Links />
                </div>
              </div>
              <div className='card-social-media card-social-media-1'>
                <div className='card-content'>
                  <p>
                    Bible Hacks You NEED to Know" (intriguing and uses popular
                    "hack" language)
                  </p>
                </div>
              </div>
              <div className='card-social-media'>
                <img src={socialMedia2} alt='media' className='card-img' />
                <img src={play} alt='' className='card-img-2' />
                <div className='links-wrapper'>
                  <Links />
                </div>
              </div>

              <div className='card-social-media card-social-media-2'>
                <div className='card-content'>
                  <p>
                    Living Like Jesus: Challenge Accepted" (embraces a challenge
                    mentality)
                  </p>
                </div>
              </div>
              <div className='card-social-media'>
                <img src={socialMedia3} alt='media' className='card-img' />
                <img src={play} alt='' className='card-img-2' />
                <div className='links-wrapper'>
                  <Links />
                </div>
              </div>
              <div className='card-social-media card-social-media-3'>
                <div className='card-content'>
                  <p>
                    Glow Up Your Faith" (playful take on self-improvement
                    trends)
                  </p>
                </div>
              </div>
            </div>
            <img src={productsBannerIcon} alt='' className='img-1' />
            <img src={productsBannerIcon2} alt='' className='img-2' />
            <img src={starLike} alt='' className='img-3' />
            <div className='links-wrapper-2'>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
