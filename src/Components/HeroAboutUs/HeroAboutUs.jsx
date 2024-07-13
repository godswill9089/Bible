import React, { useState } from 'react';
import './HeroAboutUs.css';
import { useIcons } from '../../hooks/useIcon';

const HeroAboutUs = () => {
  const { productsBannerIcon, productsBannerIcon2, productsBannerIcon3 } =
    useIcons();
  return (
    <div className='hero-about-us-wrapper'>
      <div className='hero-about-us'>
        <div className='container'>
          <div className='content'>
            <div className='info-wrapper'>
              <h1>Why The Moving Bible</h1>
              <p>
                In a world filled with words, The Moving Bible exists to ignite
                action. We believe that faith in Jesus Christ shouldn't be
                confined to dusty pages or Sunday sermons. It's a vibrant force
                meant to transform hearts and inspire positive change in the
                world around us.
              </p>
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

export default HeroAboutUs;
