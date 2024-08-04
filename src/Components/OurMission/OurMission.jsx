import React, { useRef, useState } from 'react';
import './OurMission.css';
import Title from '../../Views/Atoms/Title/Title';
import Card from '../Card/Card';
import Info from '../../Views/Atoms/Info/Info';

const OurMission = () => {
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
  ];
  return (
    <div className='our-mission-component'>
      <div className='container'>
        <div className='content'>
          <div className='title-wrapper'>
            <Title text={'Our Mission'} />
          </div>
          <div className='info'>
            <Info text={'The Moving Bible is dedicated to:'} strong />
          </div>
          <div className='carousel'>
            <div className='cards-wrapper'>
              <div className='cards'>
                {cards.map((card, index) => (
                  <div key={index} className='book-con'>
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
      </div>
    </div>
  );
};

export default OurMission;
