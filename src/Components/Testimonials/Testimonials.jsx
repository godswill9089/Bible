// src/Testimonials.js
import React, { useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { FaStarOfLife } from 'react-icons/fa';
import './Testimonials.css';
import img1 from '../../Assets/testimonial1.svg';
import img2 from '../../Assets/testimonial2.svg';
import { FaMessage } from 'react-icons/fa6';

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

const Testimonials = () => {
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('');
  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (translateSize === 0) {
        setTranslateSize(210);
      } else {
        setTranslateSize(translateSize - 42);
      }
    } else {
      if (translateSize === 210) {
        setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + 42);
      }
    }
    setDirection(direction);
  };
  return (
    <section className='testimonials-component'>
      <div className='container'>
        <div className='content'>
          <div className='testimonial-headers'>
            <div className='impact'>
              <h2>The Impact</h2>
              <div>
                <FaStarOfLife className='ico vision-icon test-icon' />
              </div>
           </div>
            <p>
              Countless lives have already been touched by The Moving Bible.
              We've witnessed individuals embrace faith, communities flourish,
              and the message of Christ reach new corners of the globe.
            </p>
            <div className='view-more'>
              <a href='#' className='view-more-buttons'>
                View More   <span className="arrow"> <FaArrowRight className='arrow2'/> </span>
              </a>
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
              style={{ transform: `translateX(-${translateSize}rem)` }}
            >
              {testimonials.map((testimonial, index) => (
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
