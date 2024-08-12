// src/Testimonials.js
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Testimonials.css';
import img1 from '../../Assets/testimonial1.svg';
import img2 from '../../Assets/testimonial2.svg';
import { FaMessage } from 'react-icons/fa6';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import Info from '../../Views/Atoms/Info/Info';
import useWindowSize from '../../hooks/useWindowSize';

const Testimonials = () => {
  // const [translateSize, setTranslateSize] = useState(0);
  // const [direction, setDirection] = useState('');
  // const handleTranslate = (direction) => {
  //   if (direction === 'left') {
  //     if (translateSize === 0) {
  //       setTranslateSize(210);
  //     } else {
  //       setTranslateSize(translateSize - 42);
  //     }
  //   } else {
  //     if (translateSize === 210) {
  //       setTranslateSize(0);
  //     } else {
  //       setTranslateSize(translateSize + 42);
  //     }
  //   }
  //   setDirection(direction);
  // };
  const testimonials = [
    {
      text: "I used to be lost and alone. After joining The Moving Bible's volunteer program, I found purpose and a supportive community.",
      name: 'Sarah',
      location: 'California USA',
      img: img1,
    },
    {
      text: "Our marriage was on the brink of collapse. Through The Moving Bible's marriage counseling program based on Christian principles, we rediscovered the love and respect for each other.",
      name: 'Maria and Carlos',
      location: 'Brazil, South America',
      img: img2,
    },
    {
      text: "The Moving Bible's daily devotionals have been a guiding light in my life.",
      name: 'David',
      location: 'Kenya, Africa',
      img: img1,
    },
    {
      text: 'bdbd d dndndnd dndnd ddndndndnnd dndndn ',
      name: 'David',
      location: 'Kenya, Africa',
      img: img2,
    },
    {
      text: 'dhsoeoe osca  saeddn dsnd ddjaja aekjejea eakaekkae, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd. gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
      location: 'Kenya, Africa',
      img: img1,
    },
    {
      text: 'jajadjad akakka dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
      location: 'Kenya, Africa',
      img: img2,
    },
    {
      text: 'gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd ,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
      location: 'Kenya, Africa',
      img: img1,
    },
    {
      text: 'oeis shshw akakka dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
      location: 'Kenya, Africa',
      img: img2,
    },
  ];
  // new
  const { windowSize } = useWindowSize();

  const cardContainer = useRef(null);
  const numOfCardsToDisplay = 2;
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

  return (
    <section className='testimonials-component'>
      <div className='container'>
        <div className='content'>
          <div className='testimonial-headers'>
            <Title text='The Impact' light />
            <Info
              text="Countless lives have already been touched by The Moving Bible.
             We've witnessed individuals embrace faith, communities flourish,
              and the message of Christ reach new corners of the globe."
            />
            <div className='view-more'>
              <ButtonPill onClick={() => {}} text={'View more'} light />
              <div className='btns'>
                <div
                  className={`btn ${direction === 'left' && 'active'}`}
                  onClick={() => handleTranslate('left')}
                >
                  <FaArrowLeft />
                </div>
                <div
                  className={`btn ${direction === 'right' && 'active'}`}
                  onClick={() => handleTranslate('right')}
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-cards-wrapper'>
            <div
              className='testimonial-cards'
              style={{ transform: `translateX(-${translateSize}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className='card-con' ref={cardContainer}>
                  <div className='testimonial-card' key={index}>
                    <div className='card-body'>
                      <div className='img-con'>
                        <img src={testimonial.img} alt='' className='' />
                      </div>
                      <p className='info'>{testimonial.text}</p>
                    </div>
                    <div className='card-bottom'>
                      <div className='icon'>
                        <FaMessage />
                      </div>
                      <div className='footer-info'>
                        <p className='name'>{testimonial.name} </p>
                        <p className='location'>
                          <strong className=''>{testimonial.location}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className='carousel' ref={carouselRef}>
          <button
            onClick={prevSlide}
            className='carousel-button carousel-button-left'
          >
            &#8249;
          </button>
          <div
            className='carousel-inner'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className='carousel-item' key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className='carousel-button carousel-button-right'
          >
            &#8250;
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
