import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useIcons } from '../../hooks/useIcon';

const cards = [
  {
    title: 'Faith In Action',
    description:
      'We Believe In Putting Our Beliefs Into Practice, Serving Others, And Spreading The Message Of Love And Hope.',
  },
  {
    title: 'Spreading The Gospel',
    description:
      'Sharing The Good News Of Jesus Christ With Every Corner Of The Earth Is At The Heart Of Our Mission.',
  },
  {
    title: 'Christ-Centered Living',
    description:
      'We Strive To Embody The Teachings Of Jesus Christ In Our Thoughts, Words, And Deeds.',
  },
  {
    title: 'Transforming Lives',
    description:
      'We Believe In The Power Of The Gospel To Empower Individuals And Create A Ripple Effect Of Positive Change.',
  },
  {
    title: 'Transforming Lives',
    description:
      'We Believe In The Power Of The Gospel To Empower Individuals And Create A Ripple Effect Of Positive Change.',
  },
];

const CardContainer = ({ translateSize }) => {
  return (
    <div className='card-container'>
      <div className='slides-wrapper'>
        <div
          className='cards-wrapper'
          style={{ transform: `translateX(-${translateSize}rem)` }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
