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
                  "In a world filled with words, The Moving Bible exists to ignite action. We believe that faith in Jesus Christ shouldn't be    confined to dusty pages or Sunday sermons. It's a vibrant force meant to transform hearts and inspire positive change in the world around us"
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
