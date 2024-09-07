import React from 'react';
import './Hero.css';
import hero from '../../Assets/Frame 6.png';
import { useIcons } from '../../hooks/useIcon';

const Hero = () => {
  const {
    productsBannerIcon,
    ringsHome,
    productsBannerIcon3,
    ringsHome2,
    theMovingBibleHome,
  } = useIcons();
  return (
    <div className='hero-home-wrapper'>
      <div className='container'>
        <div className='content'>
          <div className='hero-home'>
            <div className='info-wrapper'>
              <img
                src={theMovingBibleHome}
                alt='the moving bible logo'
                className=''
              />
              <h1>WELCOME!</h1>
              <p>Embodying the gospel of God to reflect in the actions of humans, through spiritual transformation</p>
            </div>
            <img src={productsBannerIcon} alt='' className='img-1' />
            <img src={ringsHome} alt='' className='img-2' />
            <img src={productsBannerIcon3} alt='' className='img-3' />
            <img src={ringsHome2} alt='' className='img-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
