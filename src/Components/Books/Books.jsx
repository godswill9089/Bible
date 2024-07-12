import React, { useState } from 'react';
import './Books.css';
import { FaArrowLeft, FaStarOfLife } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import CardContainer from '../CardContainer/CardContainer';
import { useIcons } from '../../hooks/useIcon';
import Title from '../../Views/Atoms/Title/Title';
import ButtonPill from '../../Views/Molecules/ButtonPill/ButtonPill';
import ButtonRound from '../../Views/Molecules/ButtonRound/ButtonRound';

const Books = () => {
  const { titleIcon } = useIcons();
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
            <div className='books'>
              <div className='book'>
                <img src='' alt='' className='' />
                <div className='btn-wrapper'>
                  <ButtonPill text={'Buy now'} />
                </div>
              </div>
              <div className='book'>
                <img src='' alt='' className='' />
                <div className='btn-wrapper'>
                  <ButtonPill text={'Buy now'} />
                </div>
              </div>
              <div className='book'>
                <img src='' alt='' className='' />
                <div className='btn-wrapper'>
                  <ButtonPill text={'Buy now'} />
                </div>
              </div>
              <div className='book'>
                <img src='' alt='' className='' />
                <div className='btn-wrapper'>
                  <ButtonPill text={'Buy now'} />
                </div>
              </div>
            </div>
            <div className='carousel-btn-left'>
              <ButtonRound active={false} direction='left' onClick={() => {}} />
            </div>
            <div className='carousel-btn-right'>
              <ButtonRound active={true} direction='right' onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
