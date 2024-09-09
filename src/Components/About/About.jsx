import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import Title from '../../Views/Atoms/Title/Title';
import Card from '../Card/Card';
import useWindowSize from '../../hooks/useWindowSize';
import Info from '../../Views/Atoms/Info/Info';

const About = () => {
  const { windowSize } = useWindowSize();
  const [cards, setCards] = useState([
    {
      title: 'Christ-centered living',
      description:
        'We strive to embody the teachings of Jesus Christ in our thoughts, words, and deeds.',
    },
    {
      title: 'Transforming Lives',
      description:
        'We Believe In The Power Of The Gospel To Empower Individuals And Create A Ripple Effect Of Positive Change.',
    },
    {
      title: 'Excellence in the Spirit',
      description:
        'Our work/walk daily with Christ Jesus is a work towards excellence as He helps us create a better version of ourselves daily, through transformation. Our actions shall emulate and exhibit excellence in truth and in Spirit',
    },
    {
      title: 'Faith in action',
      description:
        'We Believe In Putting Our Beliefs Into Practice, Serving Others, And Spreading The Message Of Love And Hope.',
    },

    {
      title: 'Spreading The Gospel',
      description:
        'Sharing The Good News Of Jesus Christ With Every Corner Of The Earth Is At The Heart Of Our Mission.',
    },
  ]);

  // new

  const cardContainer = useRef(null);
  const numOfCardsToDisplay = 4;
  const numOfCardsTotal = cards.length;

  const columnGap = 30;
  const [cardWidth, setCardWidth] = useState(0);
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('right');
  const [slideCount, setSlideCount] = useState(0);

  const handleTranslate = (direction) => {
    const cardsTemp = [...cards];
    if (direction === 'left') {
      if (slideCount > 0) {
        let lastItemCopy = { ...cardsTemp[cardsTemp.length - 1] };
        cardsTemp.pop(lastItemCopy);
        setTranslateSize(translateSize - columnGap - cardWidth);
        setSlideCount(slideCount - 1);
      }
    } else {
      let firstItemCopy = { ...cardsTemp[slideCount] };
      cardsTemp.push(firstItemCopy);
      setTranslateSize(translateSize + columnGap + cardWidth);
      setSlideCount(slideCount + 1);
    }
    setCards(cardsTemp);
    setDirection(direction);
  };

  useEffect(() => {
    const cardWidth = cardContainer.current?.getBoundingClientRect().width;
    setCardWidth(cardWidth);
  }, []);

  console.log(cards);
  console.log('slideCount', slideCount);
  // console.log(translateSize);

  return (
    <div className='about-component'>
      <div className='title-wrapper'>
        <Title text={'Learn about who we are'} />
      </div>
      <div className='about'>
        <div className='details'>
          <Info
            text={
              'We are a passionate community with dedication towards bringing the gospel of Jesus Christ to all people of the earth. We believe that faith in God should not just be only words but actions as well, thereby providing a driving force for positive change in the world.'
            }
          />
          <h1 className='title-vision'>Vision</h1>
          <Info
            text={
              'We envision a future where at least 1 billion people across 195 countries are living out the teachings of God as it is written in the Holy Bible, in the next 10 years. We would actively seek a world, through the empowerment of  God Almighty where Christ-like love, compassion and forgiveness becomes the key cornerstones of people’s everyday actions, leading to stronger communities and individuals empowered by their faith in God.'
            }
          />
        </div>
        <div className='btn-about-wrapper'>
          <div className='btn-about'>
            <div
              className={`carousel-btn carousel-btn-left ${
                slideCount === 0 && 'hidden'
              }`}
            >
              <ButtonRound
                active={direction === 'left'}
                onClick={() => handleTranslate('left')}
                direction='left'
              />
            </div>
            <div
              className={`carousel-btn carousel-btn-right ${false && 'hidden'}`}
            >
              <ButtonRound
                active={direction === 'right'}
                onClick={() => handleTranslate('right')}
                direction='right'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='carousel'>
        <div className='cards-wrapper'>
          <div
            className='cards'
            style={{
              transform: `translateX(-${translateSize}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className='book-con' ref={cardContainer}>
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
