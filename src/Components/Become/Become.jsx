import React, { useEffect, useState } from 'react';
import './Become.css';
import { FaArrowRight, FaCheck, FaEdit } from 'react-icons/fa';
import { useIcons } from '../../hooks/useIcon';

const Become = () => {
  const { dollar, naira, rabbit, funny, blue, lightBlue } = useIcons();
  const [cardTypes] = React.useState([
    {
      type: 'naira',
      currency: 'ngn',
      name: 'Naira',
      img: naira,
      typeName: 'Naira Card (NGN)',
      controlSpending: true,
      globalPayment: true,
    },
    {
      type: 'dollar',
      currency: 'usd',
      name: 'Dollar',
      img: dollar,
      typeName: 'Dollar Card (USD)',
      controlSpending: true,
      globalPayment: true,
    },
  ]);
  const stack = React.useRef();
  const [selectedType, setSelectedType] = React.useState(cardTypes[1]);
  function changeSelectedType({ type }) {
    if (type === selectedType) return;

    setSelectedType(type);

    const card = document.querySelector('.card:last-child');
    card.classList.add('swap-animation');

    // setTimeout(() => {
    //   card.classList.remove('swap-animation');
    //   stack.current.prepend(card);
    // }, 250);
  }
  const [cards, setCards] = useState([
    { id: 1, type: 'Naira', img: blue, video: funny },
    { id: 2, type: 'Dollar', img: lightBlue, video: rabbit },
  ]);
  const [active, setActive] = useState(1);
  const [playVideo, setPlayVideo] = useState(false);
  const handleCardTranslate = (id) => {
    console.log('id', id);
    if (id === active) {
      if (active === 1) {
        setActive(2);
      } else {
        setActive(1);
      }
      setPlayVideo(false);
    } else {
      setPlayVideo(true);
    }
  };
  const [activeVideo, setActiveVideo] = useState(funny);
  useEffect(() => {
    let cardsTemp = [...cards];
    cardsTemp = cardsTemp.reverse();
    // setCards(cardsTemp);

    const card = document.querySelector('.vid-content:last-child');
    setTimeout(() => {
      card.classList.remove('swap-animation');
      stack.current.prepend(card);
    }, 250);
    setActiveVideo(cards[active - 1]?.video);
  }, [active]);

  return (
    <>
      <div className='banner ban'>
        <div className='banner-con'>
          <div className='text-content'>
            <h1>Become A Volunteer</h1>
            <p>
              Join A Vibrant Community Dedicating Their Time To Various
              Initiatives, Like Community Outreach Programs Or Spreading The
              Gospel Online.
            </p>
            <a href='#' className='watch-button'>
              Watch Now
              <div>
                <FaArrowRight className='link' />
              </div>
            </a>
          </div>
          <div className='video-content-wrapper'>
            <div className='vid-contents' ref={stack}>
              {cards.map((card) => (
                <div
                  className={`vid-content ${
                    card.id === active && 'swap-animation'
                  }`}
                  onClick={() => handleCardTranslate(card.id)}
                >
                  {!playVideo && <img src={card.img} alt='' />}
                  {playVideo && active === card.id && (
                    <img src={card.img} alt='' />
                  )}
                  {playVideo && active !== card.id && (
                    <video src={card.video} controls></video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='join'>
        <header className='join-header'>
          <h1>Ready to join us in making a difference?</h1>
          <p>Choose your path</p>
          <button className='btn'>
            Join the Movement
            <div>
              <FaArrowRight className='link2' />
            </div>
          </button>
        </header>
      </div>
    </>
  );
};

export default Become;
