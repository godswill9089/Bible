import React, { useState } from 'react';
import './HeroProducts.css';
import { useIcons } from '../../hooks/useIcon';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';

const HeroProducts = () => {
  const {
    productsBannerIcon,
    productsBannerIcon2,
    productsBannerIcon3,
    productsBannerShirts,
    hoodieBlue,
  } = useIcons();
  const [active, setActive] = useState('right');
  return (
    <div className='hero-products-wrapper'>
      <div className='hero-products'>
        <div className='container'>
          <div className='content'>
            <div className='info-wrapper'>
              <p>
                The Moving Bible Shop offers a variety of resources to deepen
                your faith, inspire action, and share your message with the
                world. Explore our collection of thoughtfully curated products
                and find the perfect tools to ignite your faith journey.
              </p>
            </div>
            <img src={productsBannerIcon} alt='' className='img-1' />
            <img src={productsBannerIcon2} alt='' className='img-2' />
            <img src={productsBannerIcon3} alt='' className='img-3' />
          </div>
        </div>
      </div>
      <div className='t-shirts'>
        <div className='container'>
          <div className='content'>
            <div className='info'>
              <p className='info-text'>
                <span>T-shirts & Sweatshirts:</span> High-quality garments
                featuring uplifting messages and scripture verses. Choose from a
                variety of designs and colors to express your faith in style.
              </p>
              <div className='btns-wrapper'>
                <ButtonPill
                  onClick={() => {
                    console.log('btn pill');
                  }}
                  text={'Shop now'}
                />
                <div className='btns'>
                  <ButtonRound
                    active={active === 'left'}
                    onClick={() => setActive('left')}
                    direction='left'
                  />
                  <ButtonRound
                    active={active === 'right'}
                    onClick={() => setActive('right')}
                    direction='right'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={active === 'right' ? productsBannerShirts : hoodieBlue}
        alt=''
        className='products-banner-shirts'
      />
    </div>
  );
};

export default HeroProducts;
