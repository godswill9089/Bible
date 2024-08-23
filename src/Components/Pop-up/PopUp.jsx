import React from 'react';
import './PopUp.css';

const PopUp = ({
  title,
  description,
  items,
  setShowAmNewHereDropdown1,
  setShowAmNewHereDropdown2,
}) => {
  return (
    <div className='volunteer-card'>
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index} className='volunteer-item'>
          <h4>{item.heading}</h4>
          <p>{item.text}</p>
        </div>
      ))}
      <button
        className='sign-up-button'
        onClick={() => {
          setShowAmNewHereDropdown1(false);
          setShowAmNewHereDropdown2(true);
          console.log('sign up');
        }}
      >
        Sign Up2
      </button>
    </div>
  );
};

export default PopUp;
