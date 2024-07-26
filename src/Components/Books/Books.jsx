import React, { useEffect, useRef, useState } from 'react';
import './Books.css';
import { FaArrowLeft, FaStarOfLife } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import CardContainer from '../CardContainer/CardContainer';
import { useIcons } from '../../hooks/useIcon';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import CardBook from '../../Views/Molecules/CardBook/CardBook';

const Books = () => {
  const testimonials = [
    {
      id: 1,
      text: "Our marriage was on the brink of collapse. Through The Moving Bible's marriage counseling program based on Christian principles, we rediscovered the love and respect for each other.",
      name: 'Maria and Carlos',
    },
    {
      id: 2,
      text: "The Moving Bible's daily devotionals have been a guiding light in my life.",
      name: 'David',
    },
    { id: 3, text: 'bdbd d dndndnd dndnd ddndndndnnd dndndn ', name: 'David' },
    {
      id: 4,
      text: 'dhsoeoe osca  saeddn dsnd ddjaja aekjejea eakaekkae, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd. gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
    },
    {
      id: 5,
      text: 'jajadjad akakka dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
    },
    {
      id: 6,
      text: 'gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd ,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd,gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
    },
    {
      id: 7,
      text: 'oeis shshw akakka dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd, gshsie akkso dkakka LwowOED DANAANNAD ADKADKKjs sjsdjd',
      name: 'David',
    },
    {
      id: 8,
      text: "I used to be lost and alone. After joining The Moving Bible's volunteer program, I found purpose and a supportive community.",
      name: 'Sarah',
    },
  ];
  const bookContainer = useRef(null);

  const numOfCardsToDisplay = 4;
  const numOfCardsTotal = testimonials.length;
  const columnGap = 30;
  const [slideCount, setSlideCount] = useState(0);

  const [cardBookWidth, setCardBookWidth] = useState(0);
  const [translateSize, setTranslateSize] = useState(0);
  const [direction, setDirection] = useState('right');

  const handleTranslate = (direction) => {
    if (direction === 'left') {
      if (slideCount === 0) {
        // setTranslateSize(200);
      } else {
        setTranslateSize(translateSize - columnGap - cardBookWidth);
        setSlideCount(slideCount - 1);
      }
    } else {
      if (slideCount === numOfCardsTotal + 1 - numOfCardsToDisplay) {
        // setTranslateSize(0);
      } else {
        setTranslateSize(translateSize + columnGap + cardBookWidth);
        setSlideCount(slideCount + 1);
      }
    }
    setDirection(direction);
  };
  useEffect(() => {
    const cardBookWidth = bookContainer.current?.getBoundingClientRect().width;
    setCardBookWidth(cardBookWidth);
  }, []);
  console.log('cardBookWidth', cardBookWidth);
  console.log('translateSize', translateSize);

  return (
    <div className='books-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Books'} />
          </div>
          <div className='info'>
            <p>
              <span>Inspiring Reads:</span> Dive into a selection of books by
              renowned Christian authors, thought leaders, and everyday heroes.
              Find stories that will challenge, encourage, and equip you to live
              a Christ-like life.
            </p>
            <p>
              <span>Bible Studies & Devotionals:</span> Deepen your
              understanding of scripture with in-depth Bible study guides and
              daily devotionals. Grow your faith and find practical applications
              for everyday life.
            </p>
          </div>
          <div className='carousel'>
            <div className='books-wrapper'>
              <div
                className='books'
                style={{ transform: `translateX(-${translateSize}px)` }}
              >
                {testimonials.map((book, index) => (
                  <div key={index} className='book-con' ref={bookContainer}>
                    <CardBook book={book} />
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
                slideCount === numOfCardsTotal + 1 - numOfCardsToDisplay &&
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
        </div>
      </div>
    </div>
  );
};

export default Books;
