import React, { useEffect, useRef, useState } from 'react';
import './Books.css';

import Title from '../../Views/Atoms/Title/Title';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';
import CardBook from '../../Views/Molecules/CardBook/CardBook';
import useWindowSize from '../../hooks/useWindowSize';
import Info2 from '../../Views/Atoms/Info2/Info2';

const Books = () => {
  const { windowSize } = useWindowSize();

  const [cards, setCards] = useState([
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
  ]);

  const cardContainer = useRef(null);
  const numOfCardsToDisplay = 4;
  const numOfCardsTotal = cards.length;

  const [numOfCardsExtra, setNumOfCardsExtra] = useState(1);

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

  return (
    <div className='books-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Books'} />
          </div>
          <div className='info'>
            <Info2
              textTitle='Inspiring Reads:'
              text='Dive into a selection of books by renowned Christian
              authors, thought leaders, and everyday heroes. Find stories that
              will challenge, encourage, and equip you to live a Christ-like
              life.'
            />
            <Info2
              textTitle='Bible Studies & Devotionals:'
              text='Deepen your
              understanding of scripture with in-depth Bible study guides and
              daily devotionals. Grow your faith and find practical applications
              for everyday life.'
            />
          </div>
          <div className='carousel'>
            <div className='cards-wrapper'>
              <div
                className='cards'
                style={{ transform: `translateX(-${translateSize}px)` }}
              >
                {cards.map((book, index) => (
                  <div key={index} className='cards-con' ref={cardContainer}>
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
        </div>
      </div>
    </div>
  );
};

export default Books;
