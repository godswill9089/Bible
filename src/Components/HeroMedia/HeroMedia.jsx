import React, { useState } from 'react';
import './HeroMedia.css';
import { useIcons } from '../../hooks/useIcon';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import { FaBook } from 'react-icons/fa';
import CardMedia from '../../Views/Molecules/CardMedia/CardMedia';

const HeroMedia = () => {
  const {
    productsBannerIcon,
    productsBannerIcon2,
    productsBannerIcon3,
    productsBannerShirts,
    play,
    ebook,
    blog,
    devotional,
  } = useIcons();
  const cardDetails = [
    {
      id: 1,
      title: 'Blog',
      info: 'In-depth articles covering a wide range of faith-based topics. Find practical tips for living a Christian life, inspiring stories, Bible study resources, and insightful reflections.',
      img: blog,
    },
    {
      id: 2,
      title: 'Ebooks & Online Courses',
      info: 'Downloadable ebooks and online courses delve deeper into specific topics related to faith, personal growth, and Christian living. These resources offer a structured learning experience for those seeking to strengthen their faith.',
      img: ebook,
    },
    {
      id: 3,
      title: 'Weekly Devotionals',
      info: 'Receive inspirational messages delivered straight to your inbox each week. Start your day with a dose of faith and encouragement.',
      img: devotional,
    },
  ];
  const [selectedCard, setSelectedCard] = useState({});
  console.log('selected card', selectedCard);

  return (
    <div className='hero-media-wrapper'>
      <div className='hero-media'>
        <div className='container'>
          <div className='content'>
            <div className='info-wrapper'>
              <div className='play'>
                <img src={play} alt='play' className='' />
              </div>
              <p>
                The Moving Bible offers a variety of media formats to inspire
                and empower your faith journey. Explore these options and find
                the ones that resonate most with you
              </p>
            </div>
            <img src={productsBannerIcon} alt='' className='img-1' />
            <img src={productsBannerIcon2} alt='' className='img-2' />
            <img src={productsBannerIcon3} alt='' className='img-3' />
          </div>
        </div>
      </div>
      <div className='cards-wrapper'>
        <div className='container'>
          <div className='content'>
            <div className='cards'>
              {cardDetails.map((card) => (
                <CardMedia
                  key={card.id}
                  title={card.title}
                  info={card.info}
                  img={card.img}
                  onClick={() => setSelectedCard(card)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMedia;
