import React, { useEffect, useRef, useState } from 'react';
import './Audio.css';
import { useIcons } from '../../hooks/useIcon';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import useWindowSize from '../../hooks/useWindowSize';
import CardPodcast from '../../Views/Molecules/CardPodcast/CardPodcast';

const Audio = () => {
  const { podcast1, podcast1Sm, podcast2, podcast2Sm, podcast3, podcast3Sm } =
    useIcons();
  const testimonials = [
    {
      id: 1,
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast1,
      img2: podcast1Sm,
    },
    {
      id: 2,
      title: 'Bible Study',
      info: 'Living like Christ',
      text: 'The Sermon on the Mount in Action (Focuses on a specific scripture passage and its practical application)',
      img1: podcast2,
      img2: podcast2Sm,
    },
    {
      id: 3,
      title: 'Podcast',
      info: 'Bible on the move',
      text: 'Decoding Scripture for Everyday Life (Combines practicality with scripture study)',
      img1: podcast3,
      img2: podcast3Sm,
    },
    {
      id: 4,
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast1,
      img2: podcast1Sm,
    },
    {
      id: 5,
      title: 'Podcast',
      info: 'Faith in Action',
      text: 'From Soup Kitchens to Mission Fields (Focuses on real-world service projects)',
      img1: podcast2,
      img2: podcast2Sm,
    },
  ];

  // new
  const { windowSize } = useWindowSize();

  const cardContainer = useRef(null);
  const numOfCardsToDisplay = 3;
  const numOfCardsTotal = testimonials.length;
  const columnGap = 30;
  const [slideCount, setSlideCount] = useState(0);
  const [numOfCardsExtra, setNumOfCardsExtra] = useState(1);

  const [cardWidth, setCardWidth] = useState(0);
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('right');

  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (slideCount === 0) {
        // setTranslateSize(200);
      } else {
        setTranslateSize(translateSize - columnGap - cardWidth);
        setSlideCount(slideCount - 1);
      }
    } else {
      if (
        slideCount ===
        numOfCardsTotal + numOfCardsExtra - numOfCardsToDisplay
      ) {
        // setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + columnGap + cardWidth);
        setSlideCount(slideCount + 1);
      }
    }
    setDirection(direction);
  };
  useEffect(() => {
    const cardWidth = cardContainer.current?.getBoundingClientRect().width;
    setCardWidth(cardWidth);
  }, []);
  useEffect(() => {
    if (windowSize.width <= 1300) {
      setNumOfCardsExtra(2);
    } else {
      setNumOfCardsExtra(1);
    }
  }, [windowSize]);
  const [active, setActive] = useState(1);
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
            <div className='cards-wrapper'>
              <div
                className='cards'
                style={{ transform: `translateX(-${translateSize}px)` }}
              >
                {testimonials.map((item, index) => (
                  <div key={index} className='cards-con' ref={cardContainer}>
                    {/* <CardBook  book={book} /> */}
                    <CardPodcast item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`carousel-btn carousel-btn-left ${
                slideCount === 0 && 'hidden'
              }`}
            >
              <ButtonRound
                active={direction === 'left'}
                direction='left'
                onClick={() => handleTranslate('left')}
              />
            </div>
            <div
              className={`carousel-btn carousel-btn-right ${
                slideCount ===
                  numOfCardsTotal + numOfCardsExtra - numOfCardsToDisplay &&
                'hidden'
              }`}
            >
              <ButtonRound
                active={direction === 'right'}
                direction='right'
                onClick={() => handleTranslate('right')}
              />
            </div>
          </div>
          <div className='btns'>
            {testimonials.map((item) => (
              <div
                className={`btn ${slideCount + 1 === item.id && 'active'}`}
                onClick={() => setActive(1)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
