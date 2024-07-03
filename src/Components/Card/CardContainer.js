import React from 'react';
import Card from './Card';
import './CardContainer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    title: 'Faith In Action',
    description: 'We Believe In Putting Our Beliefs Into Practice, Serving Others, And Spreading The Message Of Love And Hope.',
  },
  {
    title: 'Spreading The Gospel',
    description: 'Sharing The Good News Of Jesus Christ With Every Corner Of The Earth Is At The Heart Of Our Mission.',
  },
  {
    title: 'Christ-Centered Living',
    description: 'We Strive To Embody The Teachings Of Jesus Christ In Our Thoughts, Words, And Deeds.',
  },
  {
    title: 'Transforming Lives',
    description: 'We Believe In The Power Of The Gospel To Empower Individuals And Create A Ripple Effect Of Positive Change.',
  },
];

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const CardContainer = () => {
  return (
    <div className="card-container">
    <Slider {...settings}>
     {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </Slider>
    </div>
  );
};

export default CardContainer;