// src/components/ValuesSection.js
import React from 'react';
import './Value.css';

const values = [
  {
    title: 'Faith In Action',
    description:
      'We believe that true faith is demonstrated through our deeds, not just our words.',
  },
  {
    title: 'Compassion & Service',
    description:
      'Love for humanity is core to our mission. We strive to serve others and alleviate suffering.',
  },
  {
    title: 'Community & Unity',
    description:
      'We celebrate our differences and find strength in our collective journey of faith.',
  },
  {
    title: 'Transformation & Growth',
    description:
      'We are committed to personal and communal growth, constantly seeking ways to better live out our faith.',
  },
];

const Value = () => {
  return (
    <>
      <section className='values-section'>
        <h2>Core Values</h2>
        <div className='values-list'>
          {values.map((value, index) => (
            <div key={index} className='value-item'>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className='bg-white'></div>
    </>
  );
};

export default Value;
