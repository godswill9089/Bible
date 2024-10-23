import React, { useState } from 'react';
import './HeroGeneral.css';
import { useIcons } from '../../hooks/useIcon';
import InfoHero from '../../Views/Atoms/InfoHero/InfoHero';
import TitleHero from '../../Views/Atoms/TitleHero/TitleHero';

const HeroGeneral = ({ title, info }) => {
  const { productsBannerIcon, productsBannerIcon2, productsBannerIcon3 } =
    useIcons();
  return (
    <div className='hero-general-wrapper'>
      <div className='hero-general'>
        <div className='container'>
          <div className='content'>
            <div className='info-wrapper'>
              <TitleHero text={title} />
              <InfoHero
                text={
                  info ||
                  "We envision a future where at least 1 billion people across 195 countries are living out the teachings of God as it is written in the Holy Bible, in the next 10 years. We would actively seek a world, through the empowerment of  God Almighty where Christ-like love, compassion and forgiveness becomes the key cornerstones of people’s everyday actions, leading to stronger communities and individuals empowered by their faith in God."
                }
              />
            </div>
            <img src={productsBannerIcon} alt='' className='img-1' />
            <img src={productsBannerIcon2} alt='' className='img-2' />
            <img src={productsBannerIcon3} alt='' className='img-3' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGeneral;
